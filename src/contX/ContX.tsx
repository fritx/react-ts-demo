import React, { useCallback, useContext, useReducer, useRef } from 'react';
import styled from 'styled-components';
import { Store, GlobalStoreContext, createStore } from './store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Child: React.FC = () => {
  const store = useContext(GlobalStoreContext);
  const { cards } = store.state;
  return (
    <div>
      {cards.map((card) => {
        return <div key={card.title}>{card.title}</div>;
      })}
    </div>
  );
};

export const ContX: React.FC = () => {
  const [, update] = useReducer((prev) => {
    return (prev + 1) % 100000;
  }, 0);

  const storeRef = useRef<Store>();

  if (!storeRef.current) {
    storeRef.current = createStore(update);
  }

  const store = storeRef.current;

  const { cards } = store.state;

  const handleAdd = useCallback(() => {
    store.setState((prevState) => {
      return {
        ...prevState,
        cards: [
          ...prevState.cards,
          {
            title: `New Card ${Math.random()}`,
            position: { x: 0.2, y: 0.2 },
          },
        ],
      };
    });
  }, []);

  return (
    <GlobalStoreContext.Provider value={store}>
      <Wrapper>
        <style>{`
          html, body, #root {
            width: 100%;
            height: 100%;
          }
        `}</style>
        <button onClick={handleAdd}>Add</button>
        {cards.map((card) => {
          return <div key={card.title}>{card.title}</div>;
        })}
        <Child />
      </Wrapper>
    </GlobalStoreContext.Provider>
  );
};
