import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';
import { textConstants } from '../../../constants/textConstants/textConstants';
import DefaultButton from '../../../component/DefaultButton';
import DefaultHeader from '../../../component/DefaultHeader';
import { RegularText } from '../../../component/CommonText';
const LoginWithEmail = ({ navigation }: any) => {
  return (
    <View style={style.container}>
      <DefaultHeader onBackPress={()=>navigation.goBack()} />
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("TermAndCondition")} style={style.forgotPasswordView}>
        <RegularText
          style={style.forgotText}
          title={"gfdgd"}
          // title={textConstants.login.accountRecovery}
        />
      </TouchableOpacity>
      <View style={style.description}>
        <RegularText
          style={style.descText}
          title={"dfgdfg"}
          // title={textConstants.login.accountRecoveryDesc}
        />
      </View>
      <View style={style.buttonViewText}>
        <DefaultButton 
        title={"fdgdgdf"}
        // title={textConstants.login.loginWithEmail}
         />
      </View>
    </View>
  );
};

export default LoginWithEmail;
