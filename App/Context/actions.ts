import { ActionTypes } from './actionTypes';
import { login, getLoggedInUserInfo, logout, signup } from 'App/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loginUser(
  dispatch: React.Dispatch<any>,
  loginPayload: { email: string; password: string },
): Promise<any> {
  try {
    const loginResponse = await login(
      loginPayload.email,
      loginPayload.password,
    );
    if (loginResponse) {
      const userInfo = await getLoggedInUserInfo();
      dispatch({ type: ActionTypes.LOGIN, payload: userInfo });
      return { status: 1 };
    }
  } catch (e) {
    return { error: e.message };
  }
}

export async function signUpUser(
  dispatch: React.Dispatch<any>,
  payload: { email: string; password: string; name: string; phone: string },
): Promise<any> {
  try {
    const signedResponse = await signup(
      payload.name,
      payload.email,
      payload.password,
      payload.phone,
    );
    if (signedResponse) {
      const userInfo = await getLoggedInUserInfo();
      dispatch({ type: ActionTypes.LOGIN, payload: userInfo });
      return { status: 1 };
    }
  } catch (e) {
    return { error: e.message };
  }
}

export async function logoutUserTest(
  dispatch: React.Dispatch<any>,
): Promise<any> {
  dispatch({ type: ActionTypes.LOGOUT });
  await logout();
  // AsyncStorage.removeItem('currentUser');
  // AsyncStorage.removeItem('token');
}
