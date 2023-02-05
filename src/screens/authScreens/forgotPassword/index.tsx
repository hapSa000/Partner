import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {textConstants} from '../../../constants/textConstants/textConstants';

const index = () => {
  return (
    <View style={style.container}>
      <View style={style.imageView}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg',
          }}
          style={style.imagestyle}
        />
      </View>
      <View style={style.imageView}>
        <Image
          source={{
            uri: 'https://img.favpng.com/6/17/5/vector-graphics-cartoon-drawing-image-clip-art-png-favpng-ssS12XjzLhR2bXERFCjRCLryR.jpg',
          }}
          style={style.imagestyle}
          // resizeMode={'contain'}
        />
      </View>
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
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190216/ourmid/pngtree-vector-message-icon-png-image_541792.jpg',
            }}
            style={style.emailIcon}
          />
        </View>

        <TextInput
          placeholder={textConstants.formPlaceHolder.emailAddress}
          style={style.textInput}
        />
      </View>
      <TouchableOpacity style={style.buttonView}>
        <Text style={style.buttonText}>
          {textConstants.resetPassword.resetPassword}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
