import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colorConstsnts/colors';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.Primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    height: hp('10%'),
    padding: hp('2%'),
  },
  headerTitleText: {fontSize: hp('5%'), color: 'white'},
  notificationImage: {tintColor: 'white', height: 30, width: 25},
});

export default style;
