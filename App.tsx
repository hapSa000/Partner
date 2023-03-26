import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigation';
import Chat from './src/screens/appScreens/chat';
import Notification from './src/screens/appScreens/notification';
import Profile from './src/screens/appScreens/profile/Profile';
import SafetyCenter from './src/screens/appScreens/SafetyCenter/SafetyCenter';
import Settings from './src/screens/appScreens/Settings/Settings';
// import {Profile} from './src/screens/appScreens';
// import SafetyCenter from './src/screens/appScreens/SafetyCenter/SafetyCenter';
// import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Profile /> */}
      <AppNavigator />
      {/* <WebView 
      source={'https://hotpot.ai/icon-resizer'}
      /> */}
    </View>
  );
};

export default App;
