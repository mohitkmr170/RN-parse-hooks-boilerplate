import React, {createContext, useReducer} from 'react';
import {reducer} from './reducers';
import {InitialState} from './initialState';

export const Store: any = createContext(InitialState);

export const StoreProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
};
