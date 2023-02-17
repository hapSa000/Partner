import React from 'react';
import { WebView } from 'react-native-webview';
import DefaultHeader from './DefaultHeader';
const WebOpen = ({ navigation, route }: any) => {
  return (
    <>
      <DefaultHeader
        onBackPress={() => navigation.goBack()}
        title={route.params.title}
      />
      <WebView
        originWhitelist={['*']}
        source={{
          uri: route.params.URL,
        }}
        // onNavigationStateChange = {this.handleNavigationStateChange}
        allowFileAccess={true}
        scalesPageToFit={true}
      />
    </>
  );
};

export default WebOpen;
