import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colorConstsnts/colors';
import { StyleSheet } from 'react-native';
import Typography from '../constants/fontConstants/fonts';

const DefaultHeader = (props) => {
  return (
    <View style={[style.container, {}]}>
      <View style={[style.headerView, props.style, {}]}>
        <TouchableOpacity
          style={[props.touchStyle]}
          activeOpacity={0.6} onPress={props.onBackPress}>
          <Icon name="chevron-back-sharp" size={40} color={colors.grey} />
        </TouchableOpacity>
        <Text style={[{ textAlign: "center", fontSize: 20, fontFamily: Typography.latoBold, color: colors.Black }, props.endText]}>{props.title}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headerView: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    width: '100%',
    height: 60,
    padding: 10,
    alignItems: 'center',

  },
  container: {
    alignItems: 'center',
    justifyContent: "center",
    paddingLeft: 0, width: "100%"
    , backgroundColor: colors.White
  },
})
export default DefaultHeader;
