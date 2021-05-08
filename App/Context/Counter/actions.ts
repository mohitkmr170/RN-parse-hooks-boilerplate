import {ActionTypes} from './actionTypes';

export const incrementCounter = (
  dispatch: React.Dispatch<any>,
  payload: any,
) => {
  dispatch({
    type: ActionTypes.INCREMENT_COUNTER,
    payload: payload,
  });
};
