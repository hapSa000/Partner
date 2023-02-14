import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {textConstants} from '../../../constants/textConstants/textConstants';
import InputField from '../../../component/InputField';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colorConstsnts/colors';
import DefaultButton from '../../../component/DefaultButton';
const ForgotPassword = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.imageView}>
        <Image
          source={require('../../../assets/images/logo-color.png')}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View>
      {/* <View style={style.imageView}>
        <Image
          source={require('../../../assets/images/MyProfile/man.png')}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View> */}
      <View style={style.forgotPasswordView}>
        <Text style={style.forgotText}>
          {textConstants.resetPassword.heading}
        </Text>
      </View>
      <View style={style.description}>
        <Text style={style.descText}>
          {textConstants.resetPassword.subHeading1}
        </Text>
        <Text style={style.descText}>
          {textConstants.resetPassword.subHeading2}
        </Text>
      </View>
      <View style={style.ViewTextinput}>
        <View style={style.iconView}>
          <Icon name="mail-outline" size={25} color={colors.grey} />
        </View>

        <TextInput
          placeholder={textConstants.formPlaceHolder.emailAddress}
          style={style.textInput}
          placeholderTextColor={colors.grey}
        />
        {/* <InputField style={{width: '80%'}} /> */}
      </View>
      <View style={style.buttonViewText}>
        <DefaultButton
          title={textConstants.resetPassword.resetPassword}
          onPress={() => navigation.navigate('TermAndCondition')}
        />
      </View>
    </View>
  );
};
export default ForgotPassword;
