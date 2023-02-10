import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TouchableView(props) {
  return <TouchableOpacity>{props.children}</TouchableOpacity>;
}
