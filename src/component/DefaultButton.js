import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colorConstsnts/colors';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { textConstants } from '../constants/textConstants/textConstants';
import { RegularText } from './CommonText';

const DefaultButton = (props) => {
    const {title} = props
  return (
    
    <TouchableOpacity style={style.container} >
      <LinearGradient
        colors={[ colors.Pink,colors.Orange,]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={style.buttonView}>
          <RegularText style={style.buttonText} title={title} />
      </LinearGradient>
      </TouchableOpacity>
   
  );
};

const style=StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        alignItems: 'center',
         justifyContent: "center",
        //   paddingLeft:0
      },
    buttonView: {
        borderColor: colors.White,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 30,
        paddingVertical: 12,
        backgroundColor: colors.Green,
      },
      buttonText: {
        color: colors.White,
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },
})
export default DefaultButton;
