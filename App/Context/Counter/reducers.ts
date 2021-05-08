import { ActionTypes } from './actionTypes';
import { InitialState } from './initialState';

const incrementCounter = (
  state: any,
  action: { type: any; payload: object }
) => {
  state.globalCounter += 1;
  return { ...state };
};

const decrementCounter = (
  state: any,
  action: { type: any; payload: object }
) => {
  state.globalCounter -= 1;
  return { ...state };
};

export const reducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return incrementCounter(state, action);
    case ActionTypes.DECREMENT_COUNTER:
      return decrementCounter(state, action);
    default:
      return state;
  }
};
