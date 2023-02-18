import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  card: {
    flex: 0.8,
    // borderColor: '#E8E8E8',
    // justifyContent: 'flex-end',
    // backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default style;
