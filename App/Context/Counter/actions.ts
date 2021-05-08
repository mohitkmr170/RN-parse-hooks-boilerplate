import { ActionTypes } from './actionTypes';

export const incrementCounter = (
  dispatch: React.Dispatch<any>,
  payload: any
) => {
  dispatch({
    type: ActionTypes.INCREMENT_COUNTER,
    payload: payload,
  });
};
export const decrementCounter = (
  dispatch: React.Dispatch<any>,
  payload: any
) => {
  dispatch({
    type: ActionTypes.DECREMENT_COUNTER,
    payload: payload,
  });
};
