import {View, Text} from 'react-native';
import React from 'react';
import AppIntro from './src/screens/appIntroScreen/AppIntro';
import {Login} from './src/screens/authScreens';
import Splash from './src/screens/appIntroScreen/splash';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Splash />
      {/* <Login/> */}
    </View>
  );
};

export default App;
