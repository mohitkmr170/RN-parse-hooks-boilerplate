import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthReducer, initialState } from './reducers';
import { getLoggedInUserInfo } from 'App/Services';
import { ActionTypes } from './actionTypes';

const AuthStateContext = createContext({});
const AuthDispatchContext = createContext({});

export function useAuthState(): any {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}

export function useAuthDispatch(): any {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}

// export const Store: any = createContext(initialState);

export const AuthProvider: React.FC = ({ children }): any => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  const dispatchUser = async () => {
    const user = await getLoggedInUserInfo();
    dispatch({ type: ActionTypes.LOGIN, payload: user });
  };

  useEffect(() => {
    dispatchUser();
  }, []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
