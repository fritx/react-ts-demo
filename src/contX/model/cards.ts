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
  moveCard = 'moveCard',
}

interface AddCardAction {
  type: CardsActionType.addCard;
  payload: Card;
}
interface MoveCardAction {
  type: CardsActionType.moveCard;
  payload: Pick<Card, 'id' | 'position'>;
}
type CardsAction = AddCardAction | MoveCardAction; // TODO more actions

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
    case CardsActionType.moveCard: {
      const payload = validPayload(action.payload);
      const { id, position } = payload;
      const card = draft.cards.find((item) => item.id === id);
      Object.assign(card, { position });
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

export const moveCard = (payload: MoveCardAction['payload']): void => {
  dispatch({ type: CardsActionType.moveCard, payload });
};
