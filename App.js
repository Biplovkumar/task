import React, { useCallback, useState } from 'react';
import 'react-native-gesture-handler';
import MainRoute from './src/Navigator/Index';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...', 'Warning:','VirtualizedList:', "Accessing the 'state'"]); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications


import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/Redux/Store/Index/index'


const App = () => {
  SplashScreen.hide();
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <MainRoute />
          <FlashMessage position="bottom" duration={2000} />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  )

};


export default App;