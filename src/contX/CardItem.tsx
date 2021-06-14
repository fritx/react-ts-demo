import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card, setCard } from './model/cards';
import { CardWrapper } from './style/cards';

interface Pos {
  x: number;
  y: number;
}
interface CardProps {
  card: Card;
  areaRef: RefObject<HTMLDivElement>;
}

export const CardItem: React.FC<CardProps> = ({ card, areaRef }: CardProps) => {
  const { id } = card;
  const ref = useRef<HTMLDivElement>(null);
  const [pointerOffset, setPointerOffset] = useState<Pos | null>(null);
  const [editing, setEditing] = useState(false);

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      if (!ref.current) return;
      const { x, y } = ref.current.getBoundingClientRect();
      setPointerOffset({
        x: e.clientX - x,
        y: e.clientY - y,
      });
    },
    [ref.current]
  );

  const handleDragEnd = useCallback(
    (e: React.DragEvent) => {
      if (!pointerOffset) return;
      if (!ref.current) return;
      if (!areaRef.current) return;
      const areaRect = areaRef.current.getBoundingClientRect();
      const position = {
        x: (e.clientX - pointerOffset.x - areaRect.x) / areaRect.width,
        y: (e.clientY - pointerOffset.y - areaRect.y) / areaRect.height,
      };
      setCard({ id, position });
    },
    [id, pointerOffset, ref.current, areaRef.current]
  );

  const handleDoubleClick = useCallback(() => {
    setEditing(true);
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    setEditing(false);
    setCard({ id, title: e.target.value });
  }, []);

  useEffect(() => {
    setPointerOffset(null);
    setEditing(false);
  }, [id]);

  return (
    <CardWrapper
      ref={ref}
      card={card}
      {...(editing
        ? {}
        : {
            draggable: true,
            onDragStart: handleDragStart,
            onDragEnd: handleDragEnd,
            onDoubleClick: handleDoubleClick,
          })}
    >
      <div>
        {editing && (
          <textarea autoFocus defaultValue={card.title} onBlur={handleBlur} />
        )}
        <div>{card.title}</div>
      </div>
    </CardWrapper>
  );
};
