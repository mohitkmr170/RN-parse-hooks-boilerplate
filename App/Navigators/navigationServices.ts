import { CommonActions, DrawerActions } from '@react-navigation/native';

const config = {
  navigator: null,
};

/**
 * Function to sets the navigator reference
 * @param {any} nav
 */
const setNavigator = (nav: any) => {
  if (nav) {
    config.navigator = nav;
  }
};

/**
 * Function to dispatch navigate Navigation Action
 * @param {string} name
 * @param {object} [params]
 */
const navigate = (name: string, params?: object) => {
  if (config && config.navigator) {
    //config.navigator.navigate(path, params)
    config.navigator.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
};

/**
 * Function to dispatch goBack Navigation Action
 */
const goBack = () => {
  config.navigator.dispatch(CommonActions.goBack());
};

/**
 * Function to dispatch reset Navigation Action
 */
const navigateAndReset = (name: string, params?: object) => {
  config.navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
};

/**
 * Function to dispatch openDrawer Navigation Action
 */
function openDrawer() {
  if (config.navigator) {
    config.navigator.dispatch(DrawerActions.openDrawer());
  }
}

/**
 * Function to dispatch closeDrawer Navigation Action
 */
function closeDrawer() {
  if (config.navigator) {
    config.navigator.dispatch(DrawerActions.closeDrawer());
  }
}

export {
  setNavigator,
  navigate,
  goBack,
  navigateAndReset,
  openDrawer,
  closeDrawer,
};
