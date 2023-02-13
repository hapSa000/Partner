import React from 'react';
import { Alert, StyleSheet, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colorConstsnts/colors';
import Typography from '../constants/fontConstants/fonts';

export const BoldText = props => {
  return (
    <Text
      onPress={props.onPress}
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      style={[Style.BoldText, props.style]}>
      {props.title}
    </Text>
  );
};
export const RegularText = props => {
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.RegularText, props.style]}>
      {props.title}
    </Text>
  );
};

export const SemiBoldText = props => {
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.SemiBoldText, props.style]}>
      {props.title}
    </Text>
  );
};
export const ErrorText = props => {
  return (
    <Text onPress={props.onPress} style={[Style.ErrorText, props.style]}>
      {props.title}
    </Text>
  );
};
export const MediumText = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      style={[Style.MediumText, props.style]}>
      {props.title}
    </Text>
  );
};
export const ItalicText = props => {
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.ItalicText, props.style]}>
      {props.title}
    </Text>
  );
};
export const LightText = props => {
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      style={[Style.LightText, props.style]}>
      {props.title}
    </Text>
  );
};

export const ShowToast = (status, message) => {
  // alert('hi')
  return Alert({
    text: message,
    duration: 4000,
    buttonText: 'Okay',
    type: status ? 'success' : 'danger',
    position: 'top',
  });
};

const Style = StyleSheet.create({
  BoldText: {
    fontSize: hp('2.5%'),
    fontFamily: Typography.latoBold,
    color: 'black',
  },
  toast: {
    marginTop: 500,
  },

  MediumText: {
    fontSize: hp('2.5%'),

    color: colors.Black,
  },
  LightText: {
    fontSize: hp('2.5%'),

    color: colors.Black,
  },
  SemiBoldText: {
    fontSize: hp('2%'),

    color: colors.Black,
  },
  NunitoSansSemiBold: {
    fontSize: hp('2.5%'),

    color: colors.Black,
  },

  RegularText: {
    fontSize: hp('2%'),
    fontFamily: Typography.LatoRegular,
    color: colors.Black,
  },

  ItalicText: {
    color: 'rgb(79,288,78)',
    fontSize: hp('1.7%'),
    fontFamily: Typography.LatoItalic
    // marginBottom:10
  },
  ErrorText: {
    color: 'red',
    fontSize: hp('1.5%'),
    marginLeft: wp('1%'),
    paddingVertical: hp('1%'),
  },
});
