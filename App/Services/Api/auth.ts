import Parse from '../parse';

export const login = async (email: string, password: string): Promise<any> => {
  return Parse.User.logIn(email, password);
};

export const getLoggedInUserInfo = async (): Promise<any> => {
  const userInfoResponse = await Parse.User.currentAsync().then((user: any) =>
    JSON.parse(JSON.stringify(user)),
  );
  return userInfoResponse;
};

export const logout = async () :Promise<any>  => {
  return Parse.User.logOut();
};
