import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card, moveCard } from './model/cards';
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

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      if (!ref.current) return;
      const { x, y } = ref.current.getBoundingClientRect();
      const pointerOffset = {
        x: e.clientX - x,
        y: e.clientY - y,
      };
      setPointerOffset(pointerOffset);
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
      moveCard({ id, position });
    },
    [id, pointerOffset, ref.current, areaRef.current]
  );

  useEffect(() => {
    setPointerOffset(null);
  }, [id]);

  return (
    <CardWrapper
      ref={ref}
      card={card}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {card.title}
    </CardWrapper>
  );
};
