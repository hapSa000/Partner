import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View} from 'react-native';
import colors from '../constants/colorConstsnts/colors';

export const MainContainer = props => {
  return (
    <View
      style={[
        props.style,
        {
          backgroundColor: colors.White,

          padding: hp('2%'),
        },
      ]}>
      {props.children}
    </View>
  );
};
