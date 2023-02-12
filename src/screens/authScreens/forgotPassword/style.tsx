import {StyleSheet} from 'react-native';
import colors from '../../../constants/colorConstsnts/colors';
import Typography from '../../../constants/fontConstants/fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  ViewTextinput: {
    borderColor: colors.TwinkleBlue,
    borderWidth: 2,
    backgroundColor: colors.White,
    flexDirection: 'row',
    width: '80%',
    borderRadius: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 30,
    elevation: 2,
  },
  buttonView: {
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 30,
    marginTop: 50,
    paddingVertical: 12,
    backgroundColor: colors.Green,
  },
  imageView: {
    margin: 5,
  },
  imagestyle: {
    width: 150,
    height: 100,
  },
  forgotPasswordView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  forgotText: {
    fontFamily: Typography.latoBold,
    color: 'black',
    fontSize: 25,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  descText: {
    fontWeight: '500',
    color: colors.grey,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Typography.latoBold,
  },
  emailIcon: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  textInput: {
    marginRight: 50,
    fontSize: 20,
  },
  iconView: {
    margin: 10,
  },
  buttonText: {
    color: colors.White,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  buttonViewText: {
    width: '100%',
    marginTop: 50,
  },
});
