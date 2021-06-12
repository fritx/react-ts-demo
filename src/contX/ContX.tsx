import { random, sample } from 'lodash';
import React, { useCallback } from 'react';
import { addCard, CardsProvider, useCardsContext } from './model/cards';
import { CardsArea, CardWrapper, ControlsWrapper } from './style/cards';
import { fullFillCss, FullFillWrapper, TopWrapper } from './style/common';
import { backColors } from './util/colors';

const App: React.FC = () => {
  const { cards } = useCardsContext();

  const handleAdd = useCallback(() => {
    addCard({
      title: `New Card ${Math.random()}`,
      position: { x: random(0, 1, true), y: random(0, 1, true) },
      backColor: sample(backColors) || backColors[0],
    });
  }, []);

  return (
    <FullFillWrapper>
      <ControlsWrapper>
        <button onClick={handleAdd}>Add</button>
      </ControlsWrapper>
      <FullFillWrapper>
        <CardsArea>
          {cards.map((card) => {
            return (
              <CardWrapper key={card.title} {...card}>
                {card.title}
              </CardWrapper>
            );
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
