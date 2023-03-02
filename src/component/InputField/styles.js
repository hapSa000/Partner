import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colorConstsnts/colors';
export default StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: hp('1.5%'),
    paddingVertical: hp('1%'),
  },
  textInput: {
    height: 50,
    marginVertical: 10,
    color: colors.Black,
    borderWidth: 0,
    borderBottomWidth: 0,
    borderColor: colors.Primary,
    paddingHorizontal: hp('2%'),
    underlineColorAndroid: 'transparent',
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
