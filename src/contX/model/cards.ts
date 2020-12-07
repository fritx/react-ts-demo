import constate from 'constate';
import produce, { Draft } from 'immer';
import { useCallback, useReducer } from 'react';
import { BaseAction } from './base';

export interface Card {
  title: string;
  position: {
    x: number; // 0~1
    y: number; // 0~1
  };
  backColor: string;
}

enum CardsActionType {
  addCard = 'addCard',
}

interface AddCardAction extends BaseAction {
  type: CardsActionType.addCard;
  payload: Card;
}

interface CardsState {
  cards: Card[];
}

export type CardsAction = AddCardAction; // TODO more actions

const useCards = () => {
  const reducer = produce((draft: Draft<CardsState>, action: CardsAction) => {
    switch (action.type) {
      case CardsActionType.addCard:
        draft.cards.push(action.payload);
        break;
    }
  });
  const [state, dispatch] = useReducer(reducer, { cards: [] });

  const addCard = useCallback((card: Card) => {
    dispatch({ type: CardsActionType.addCard, payload: card });
  }, []);

  return { ...state, addCard };
};

const [CardsProvider, useCardsContext] = constate(useCards);

export { CardsProvider, useCardsContext };
