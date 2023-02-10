import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
const WebView = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default WebView;

const styles = StyleSheet.create({});
