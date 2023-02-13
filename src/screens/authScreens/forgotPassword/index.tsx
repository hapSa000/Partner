import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {textConstants} from '../../../constants/textConstants/textConstants';
import InputField from '../../../component/InputField';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colorConstsnts/colors';
import DefaultButton from '../../../component/DefaultButton';
import DefaultHeader from '../../../component/DefaultHeader';
import images from '../../../constants/imageConstants/images';
const ForgotPassword = ({ navigation }: any) => {


  return (
    <View style={style.container}>
      <View style={style.imageView}>
        <Image
          source={images.tinder}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View>
      <View style={style.imageView}>
        <Image
          source={images.google}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('LoginWithNumber')}
        style={style.forgotPasswordView}>
        <Text style={style.forgotText}>
          {textConstants.resetPassword.heading}
        </Text>
      </TouchableOpacity>
      <View style={style.description}>
        <Text style={style.descText}>
          {textConstants.resetPassword.subHeading1}
        </Text>
      </View>
      <View style={style.ViewTextinput}>
        <View style={style.iconView}>
          <Icon name="mail-outline" size={25} color={colors.grey} />
        </View>

        <TextInput
          placeholder={textConstants.formPlaceHolder.emailAddress}
          style={style.textInput}
        />
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
