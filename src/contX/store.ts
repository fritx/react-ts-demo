import { cloneDeep } from 'lodash';
import React, { createContext } from 'react';

interface Card {
  title: string;
  position: {
    x: number; // 0~1
    y: number; // 0~1
  };
}

export interface StoreState {
  cards: Card[];
}

export interface Store {
  state: StoreState;
  setState: React.Dispatch<React.SetStateAction<StoreState>>;
}

const defaultStoreState: StoreState = {
  cards: [],
};

export const defaultStore: Store = {
  state: defaultStoreState,
  setState: null as any, // before init
};

export const GlobalStoreContext = createContext(defaultStore);

export const createStore = (onUpdate: () => void): Store => {
  const store = cloneDeep(defaultStore);
  store.setState = (action) => {
    let nextState: StoreState;
    if (typeof action === 'function') {
      nextState = action(store.state);
    } else {
      nextState = action;
    }
    store.state = nextState;
    onUpdate();
  };
  return store;
};
