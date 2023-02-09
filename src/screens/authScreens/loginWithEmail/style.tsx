import {StyleSheet} from 'react-native';
import colors from '../../../constants/colorConstsnts/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: 'center',
  },
  ViewTextinput: {
    borderColor: colors.grey,
    borderWidth: 1,
    flexDirection: 'row',
    width: '80%',
    borderRadius: 30,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonView: {
    borderColor: colors.White,
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
    marginTop: 70,
  },
  forgotText: {
    fontWeight: 'bold',
    color: colors.grey,
    fontSize: 25,
    letterSpacing: 0.7,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginTop: 30,
  },
  descText: {
    fontWeight: '400',
    color: colors.lightGrey,
    fontSize: 20,
    paddingHorizontal: 40,
    marginTop: 20,
    textAlign: 'center',
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
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  headerView: {
    backgroundColor: colors.White,
    flexDirection: 'row',
    width: '100%',
    height: 60,
    padding: 10,
    alignItems: 'center',
  },
  buttonViewText: {width: '100%', marginTop: 50},
});
