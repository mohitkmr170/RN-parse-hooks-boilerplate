import Parse from '../parse';
import cloudFunction from '../parse';

export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
  return Parse.User.logIn(email, password);
};
