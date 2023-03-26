import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import DefaultHeader from '../../../component/DefaultHeader';
import {BoldText, MediumText} from '../../../component/CommonText';
import {textConstants} from '../../../constants/textConstants/textConstants';
import TextInputView from '../../../component/InputField/index';
import DefaultButton from '../../../component/DefaultButton';
import colors from '../../../constants/colorConstsnts/colors';

const AppIntroFive = ({navigation}: any) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <DefaultHeader
        title="SKIP"
        endText={{color: colors.Secondary}}
        style={{justifyContent: 'space-between'}}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.textView}>
        <MediumText
          title={textConstants.AppIntroFive.school}
          style={styles.nameStyle}
        />
      </View>
      <View style={styles.inputStyleView}>
        <TextInputView
          placeholder={textConstants.AppIntroFive.schoolName}
          style={styles.inputStyle}
          value={text}
          onChangeText={val => setText(val)}
        />
      </View>
      <MediumText
        title={textConstants.AppIntroOne.description}
        style={styles.mediumText}
      />
      {text != '' ? (
        <DefaultButton
          LinearGradientView="true"
          title={textConstants.AppIntroOne.continue}
          buttonViewStyle={[styles.buttonView, {opacity: text ? 0.99 : 0.5}]}
          onPress={() => navigation.navigate('AppIntroSix')}
        />
      ) : (
        <DefaultButton
          disabledTouch={!text}
          buttonStyle={{backgroundColor: text == '' ? colors.grey : colors.Red}}
          title={textConstants.AppIntroOne.continue}
          buttonViewStyle={[styles.buttonView, {opacity: text ? 0.99 : 0.5}]}
        />
      )}
    </View>
  );
};
export default AppIntroFive;
