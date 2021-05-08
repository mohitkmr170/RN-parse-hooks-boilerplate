import {ActionTypes} from './actionTypes';
import {InitialState} from './initialState';

const incrementCounter = (state: any, action: {type: any; payload: object}) => {
  ++state.globalCounter;
  return state;
};

export const reducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return incrementCounter(state, action);
    default:
      return state;
  }
};
