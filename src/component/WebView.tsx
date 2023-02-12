import React from 'react';
import {WebView} from 'react-native-webview';
const WebOpen = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri: 'https://stackoverflow.com/questions/73462928/react-native-react-native-asset-is-not-recognized',
      }}
      // onNavigationStateChange = {this.handleNavigationStateChange}
      allowFileAccess={true}
      scalesPageToFit={true}
    />
  );
};

export default WebOpen;
