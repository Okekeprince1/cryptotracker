 require('dotenv').config();
import React from 'react';
import { View} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header, CryptoConatiner } from './src/components';

const App = () => {
  return (
    <Provider store = {Store}>
      <View>
        <Header/>
        <CryptoConatiner/>
      </View>
    </Provider>
  )
}


export default App;
