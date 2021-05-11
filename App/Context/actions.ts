import { ActionTypes } from './actionTypes';
import { login, getLoggedInUserInfo, logout } from 'App/Services';
import { AsyncStorage } from 'react-native';

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

export async function logoutUserTest(
  dispatch: React.Dispatch<any>,
): Promise<any> {
  dispatch({ type: ActionTypes.LOGOUT });
  logout();
  AsyncStorage.removeItem('currentUser');
  AsyncStorage.removeItem('token');
}
