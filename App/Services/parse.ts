import { ApiConstant, ApiBaseUrl } from '../../Config';
/*
Parse : Powerful JavaScript SDK for Parse Server backend from Client App
*/
let Parse: any;
Parse = require('parse/react-native.js');

const AsyncStorage = require('react-native').AsyncStorage;
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(ApiConstant.ParseAppId, ApiConstant.ParseJsKey);
Parse.serverURL = ApiBaseUrl.development;

export async function cloudFunction(
  funName: string,
  params: Record<string, any>,
): Promise<any> {
  try {
    const response = await Parse.Cloud.run(funName, params);
    return response;
  } catch (error) {
    console.log(error);
    // throw error.message || error.toString() || error;
  }
}

export default Parse;
