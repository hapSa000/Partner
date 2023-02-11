import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';
import { textConstants } from '../../../constants/textConstants/textConstants';
import InputField from '../../../component/InputField';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../constants/colorConstsnts/colors';
import DefaultButton from '../../../component/DefaultButton';
const ForgotPassword = ({ navigation }: any) => {
  return (
    <View style={style.container}>
      <View style={style.imageView}>
        <Image
          // source={{
          //   uri: 'https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg',
          // }}
          source={require('../../../assets/images/MyProfile/apple.png')}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View>
      <View style={style.imageView}>
        <Image
          // source={{
          //   uri: 'https://img.favpng.com/6/17/5/vector-graphics-cartoon-drawing-image-clip-art-png-favpng-ssS12XjzLhR2bXERFCjRCLryR.jpg',
          // }}
          source={require('../../../assets/images/MyProfile/man.png')}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("LoginWithNumber")} style={style.forgotPasswordView}>
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
          {/* <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190216/ourmid/pngtree-vector-message-icon-png-image_541792.jpg',
            }}
            style={style.emailIcon}
          /> */}
          <Icon name="mail-outline" size={25} color={colors.grey} />
        </View>

        <TextInput
          placeholder={textConstants.formPlaceHolder.emailAddress}
          style={style.textInput}
        />
        {/* <InputField style={{width: '80%'}} /> */}
      </View>
      <View style={style.buttonViewText}>
        <DefaultButton title={textConstants.resetPassword.resetPassword} />
      </View>
    </View>
  );
};
export default ForgotPassword;
