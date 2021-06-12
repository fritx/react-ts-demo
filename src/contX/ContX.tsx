import { random, sample } from 'lodash';
import React, { useRef } from 'react';
import { CardItem } from './CardItem';
import { addCard, CardsProvider, useCardsContext } from './model/cards';
import { CardsArea, ControlsWrapper } from './style/cards';
import { fullFillCss, FullFillWrapper, TopWrapper } from './style/common';
import { backColors } from './util/colors';

const handleAdd = () => {
  const id = random(0, 1, true);
  addCard({
    id,
    title: `New Card ${id}`,
    position: { x: random(0, 1, true), y: random(0, 1, true) },
    backColor: sample(backColors) || backColors[0],
  });
};

const App: React.FC = () => {
  const { cards } = useCardsContext();
  const areaRef = useRef<HTMLDivElement>(null);

  return (
    <FullFillWrapper>
      <ControlsWrapper>
        <button onClick={handleAdd}>Add</button>
      </ControlsWrapper>
      <FullFillWrapper>
        <CardsArea ref={areaRef}>
          {cards.map((card) => {
            return <CardItem key={card.id} card={card} areaRef={areaRef} />;
          })}
        </CardsArea>
      </FullFillWrapper>
    </FullFillWrapper>
  );
};

export const ContX: React.FC = () => {
  return (
    <CardsProvider>
      <TopWrapper>
        <style>{`
            html, body, #root {
              ${fullFillCss}
            }
          `}</style>
        <App />
      </TopWrapper>
    </CardsProvider>
  );
};
