import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colorConstsnts/colors';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { textConstants } from '../constants/textConstants/textConstants';
import { RegularText } from './CommonText';
import { RFValue } from 'react-native-responsive-fontsize';
import images from '../constants/imageConstants/images';

const DefaultButton = (props) => {
  const { title, onPress, imgStyle, source, disabledLiner, disabledTouch, buttonViewStyle, image, LinearGradientView, buttonStyle, buttonTextStyle } = props

  return (
    <View>
      {LinearGradientView ? <TouchableOpacity activeOpacity={0.6} disabled={disabledLiner}  style={[style.container, buttonViewStyle]} onPress={onPress} >
        <LinearGradient
          colors={[colors.Primary, colors.Secondary,]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={style.buttonView}>
          <RegularText style={style.buttonText} title={title} />
        </LinearGradient>

      </TouchableOpacity>
        :
        <TouchableOpacity activeOpacity={0.6} disabled={disabledTouch} style={[style.container, buttonViewStyle]} onPress={onPress} >
          <View
            style={[style.buttonView, buttonStyle]}>
            <RegularText style={[style.buttonText, buttonTextStyle]} title={title} />
            {image ?
              <View style={{}}>
                <Image
                  source={source}
                  style={imgStyle}
                />
              </View> : null}
          </View>

        </TouchableOpacity>
      }
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row"
    //   paddingLeft:0
  },
  buttonView: {
    borderColor: colors.White,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 30,
    paddingVertical: RFValue(12),
    backgroundColor: colors.lightGrey,
  },
  buttonText: {
    color: colors.White,
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
})
export default DefaultButton;
