import constate from 'constate';
import produce, { Draft } from 'immer';
import { useState } from 'react';
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

export const getInitialState = (): CardsState => ({
  cards: [],
});

let state = getInitialState();

export const getState = (): CardsState => state;

let setState: React.Dispatch<React.SetStateAction<CardsState>>;

const reducer = produce((draft: Draft<CardsState>, action: CardsAction) => {
  switch (action.type) {
    case CardsActionType.addCard:
      draft.cards.push(action.payload);
      break;
  }
});

const dispatch = (action: CardsAction) => {
  state = reducer(state, action);
  setState(state);
};

export const addCard = (card: Card): void => {
  dispatch({ type: CardsActionType.addCard, payload: card });
};

const useCards = () => {
  const [_state, _setState] = useState(state);

  setState = _setState;

  return { ..._state };
};

const [CardsProvider, useCardsContext] = constate(useCards);

export { CardsProvider, useCardsContext };
