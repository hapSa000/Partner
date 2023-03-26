import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {textConstants} from '../../../constants/textConstants/textConstants';
import DefaultButton from '../../../component/DefaultButton';
import DefaultHeader from '../../../component/DefaultHeader';
import {RegularText} from '../../../component/CommonText';
const LoginWithEmail = ({navigation}: any) => {
  return (
    <View style={style.container}>
      <DefaultHeader onBackPress={() => navigation.goBack()} />
      <View style={style.forgotPasswordView}>
        <RegularText
          style={style.forgotText}
          title={'gfdgd'}
          // title={textConstants.login.accountRecovery}
        />
      </View>
      <View style={style.description}>
        <RegularText
          style={style.descText}
          title={'dfgdfg'}
          // title={textConstants.login.accountRecoveryDesc}
        />
      </View>
      <View style={style.buttonViewText}>
        <DefaultButton
          title={'sdfsdf'}
          LinearGradientView="true"
          // title={textConstants.login.loginWithEmail}
          onPress={() => navigation.navigate('TermAndCondition')}
        />
      </View>
    </View>
  );
};

export default LoginWithEmail;
