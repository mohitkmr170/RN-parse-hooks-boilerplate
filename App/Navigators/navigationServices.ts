import {CommonActions} from '@react-navigation/native';

const config = {
  navigator: null,
};
// sets the navigator reference
const setNavigator = (nav: any) => {
  if (nav) {
    config.navigator = nav;
  }
};

export {setNavigator};
