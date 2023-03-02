import { View, Text } from 'react-native';
import React from 'react';
import styles from './style'
import DefaultHeader from '../../../component/DefaultHeader';
import { BoldText, MediumText } from '../../../component/CommonText';
import { textConstants } from '../../../constants/textConstants/textConstants';
import TextInputView from '../../../component/InputField/index'
import DefaultButton from '../../../component/DefaultButton';
import { RFValue } from 'react-native-responsive-fontsize';

const AppIntroTwo = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <DefaultHeader onBackPress={() => navigation.goBack()} />
            <View style={styles.textView}>
                <MediumText
                    title={textConstants.AppIntroTwo.birthday}
                    style={styles.nameStyle}
                />
            </View>
            <View style={styles.textStyleView}>
                <MediumText
                    title={textConstants.AppIntroTwo.MMDDYY}
                    style={styles.mediumText}
                />
            </View>
            <MediumText
                title={textConstants.AppIntroTwo.agePublic}
                style={[styles.mediumText, { fontSize: RFValue(12), marginTop: RFValue(5) }]}
            />
            <DefaultButton
                // buttonStyle={{ backgroundColor: changeColor == '' ? colors.Brown : colors.Blue }}
                title={textConstants.AppIntroOne.continue}
                buttonViewStyle={styles.buttonView}
                onPress={() => navigation.navigate('AppIntroThree')}
            />
        </View>
    );
};
export default AppIntroTwo;