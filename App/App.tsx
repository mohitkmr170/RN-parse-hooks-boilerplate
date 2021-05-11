import React from 'react';
import type { ReactNode } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootNavigator } from 'App/Navigators/navigationContainer';
import { setNavigator } from 'App/Navigators/navigationServices';
import { AuthProvider } from 'App/Context/context';

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.parentContainer}>
        <AuthProvider>
          <RootNavigator navigationRef={(nav: any) => setNavigator(nav)} />
        </AuthProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: { flex: 1 },
});

export default App;
