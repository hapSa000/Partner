import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigation';
// import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      {/* <WebView 
      source={'https://hotpot.ai/icon-resizer'}
      /> */}
    </View>
  );
};

export default App;
