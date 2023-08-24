import React from 'react'
import Main from './src/Components/Main';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

import "./src/firebase/config";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Main />
      </PersistGate>

    </Provider>
  );
}

