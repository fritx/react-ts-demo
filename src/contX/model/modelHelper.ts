import constate from 'constate';
import { useState } from 'react';

export const modelHelper = <ModelState, ModelAction>({
  getInitialState,
  reducer,
}: {
  getInitialState: () => ModelState;
  reducer: (state: ModelState, action: ModelAction) => ModelState;
}): {
  getState: () => ModelState;
  dispatch: (action: ModelAction) => void;
  Provider: React.FC;
  useContext: () => ModelState;
} => {
  let setState: React.Dispatch<React.SetStateAction<ModelState>>;
  let state = getInitialState();
  const getState = () => state;

  const dispatch = (action: ModelAction) => {
    state = reducer(state, action);
    setState(state);
  };

  const useModel = () => {
    const [_state, _setState] = useState(state);
    setState = _setState;
    return { ..._state };
  };

  const [Provider, useContext] = constate(useModel);
  return {
    getState,
    dispatch,
    Provider,
    useContext,
  };
};
