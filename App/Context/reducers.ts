import { ActionTypes } from './actionTypes';

type InitialStateType = {
  user: string;
  token: string;
  loading: boolean;
  errorMessage: string;
};
export const initialState = {
  user: null,
  token: '',
  loading: false,
  errorMessage: null,
};
export const AuthReducer = (
  initialState: InitialStateType,
  action: { type: string; payload: object },
): any => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...initialState,
        user: action.payload,
        loading: false,
      };
    case ActionTypes.LOGOUT:
      return {
        ...initialState,
        user: '',
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
