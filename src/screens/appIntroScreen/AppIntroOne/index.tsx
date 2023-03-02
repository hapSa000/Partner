import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './style'
import DefaultHeader from '../../../component/DefaultHeader';
import { BoldText, MediumText } from '../../../component/CommonText';
import { textConstants } from '../../../constants/textConstants/textConstants';
import TextInputView from '../../../component/InputField/index'
import DefaultButton from '../../../component/DefaultButton';
import colors from '../../../constants/colorConstsnts/colors';

const AppIntroOne = ({ navigation }: any) => {

    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <DefaultHeader onBackPress={() => navigation.goBack()} />
            <View style={styles.textView}>
                <MediumText
                    title={textConstants.AppIntroOne.name}
                    style={styles.nameStyle}
                />
            </View>
            <View style={styles.inputStyleView}>
                <TextInputView
                    placeholder={textConstants.AppIntroOne.firstname}
                    style={styles.inputStyle}
                    value={text}
                    onChangeText={(val) => setText(val)}
                />
            </View>
            <MediumText
                title={textConstants.AppIntroOne.description}
                style={styles.mediumText}
            />
            <DefaultButton
                // LinearGradientView="true"
                buttonStyle={{ backgroundColor: text == '' ? colors.Brown : colors.Blue }}
                title={textConstants.AppIntroOne.continue}
                buttonViewStyle={styles.buttonView}
                onPress={() => navigation.navigate('AppIntroTwo')}
            />
        </View>
    );
};
export default AppIntroOne;