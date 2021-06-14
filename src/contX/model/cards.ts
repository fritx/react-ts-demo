import produce, { Draft } from 'immer';
import { modelHelper } from './modelHelper';

export interface Card {
  id: number; // 0~1
  title: string;
  position: {
    x: number; // 0~1
    y: number; // 0~1
  };
  backColor: string;
}

enum CardsActionType {
  addCard = 'addCard',
  setCard = 'setCard',
}

interface AddCardAction {
  type: CardsActionType.addCard;
  payload: Card;
}
interface SetCardAction {
  type: CardsActionType.setCard;
  payload: Pick<Card, 'id'> & Partial<Card>;
}
type CardsAction = AddCardAction | SetCardAction; // TODO more actions

interface CardsState {
  cards: Card[];
}

const getInitialState = (): CardsState => ({
  cards: [],
});

const validPosition = (position: Card['position']) => {
  return {
    x: Math.max(0, Math.min(position.x, 1)),
    y: Math.max(0, Math.min(position.y, 1)),
  };
};

const validPayload = <T extends CardsAction['payload']>(payload: T): T => {
  if (payload && payload.position) {
    return {
      ...payload,
      position: validPosition(payload.position),
    };
  }
  return payload;
};

const reducer = produce((draft: Draft<CardsState>, action: CardsAction) => {
  switch (action.type) {
    case CardsActionType.addCard: {
      const payload = validPayload(action.payload);
      draft.cards.push(payload);
      break;
    }
    case CardsActionType.setCard: {
      const payload = validPayload(action.payload);
      const { id, ...patch } = payload;
      const card = draft.cards.find((item) => item.id === id);
      Object.assign(card, patch);
      break;
    }
  }
});

const {
  getState: getCardsState,
  dispatch,
  Provider: CardsProvider,
  useContext: useCardsContext,
} = modelHelper<CardsState, CardsAction>({
  getInitialState,
  reducer,
});

export { getCardsState, CardsProvider, useCardsContext };

export const addCard = (payload: AddCardAction['payload']): void => {
  dispatch({ type: CardsActionType.addCard, payload });
};

export const setCard = (payload: SetCardAction['payload']): void => {
  dispatch({ type: CardsActionType.setCard, payload });
};
