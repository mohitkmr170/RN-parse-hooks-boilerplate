import Parse from '../parse';

export const login = async (email: string, password: string): Promise<any> => {
  return Parse.User.logIn(email, password);
};

export const signup = async (
  username: string,
  email: string,
  password: string,
  phone: string,
): Promise<any> => {
  return Parse.User.signUp(email, password, {
    email,
    phone,
    full_name: username,
  });
};

export const getLoggedInUserInfo = async (): Promise<any> => {
  const userInfoResponse = await Parse.User.currentAsync().then((user: any) =>
    JSON.parse(JSON.stringify(user)),
  );
  return userInfoResponse;
};

export const logout = async (): Promise<any> => {
  return Parse.User.logOut();
};
