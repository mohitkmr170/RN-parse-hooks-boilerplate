import React from 'react';
import type { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { RootNavigator } from 'App/Navigators/navigationContainer';
import { setNavigator } from 'App/Navigators/navigationServices';
import { AuthProvider } from 'App/Context/context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * App Container
 * @return {*}
 */
const App: () => ReactNode = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.parentContainer}>
        <AuthProvider>
          <RootNavigator navigationRef={(nav: any) => setNavigator(nav)} />
        </AuthProvider>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  parentContainer: { flex: 1 },
});

export default App;
