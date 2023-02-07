import {StyleSheet} from 'react-native';
import colors from '../../../constants/colorConstsnts/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  ViewTextinput: {
    borderColor: colors.grey,
    borderWidth: 1,
    // flex: 1,
    flexDirection: 'row',
    width: '80%',
    borderRadius: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 30,
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
    fontWeight: 'bold',
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
  },
  emailIcon: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  textInput: {
    marginRight: 40,
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
});
