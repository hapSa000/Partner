import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style'
import DefaultHeader from '../../../component/DefaultHeader';
import { BoldText, MediumText } from '../../../component/CommonText';
import { textConstants } from '../../../constants/textConstants/textConstants';
import TextInputView from '../../../component/InputField/index'
import DefaultButton from '../../../component/DefaultButton';
import colors from '../../../constants/colorConstsnts/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import images from '../../../constants/imageConstants/images';
import { TouchableOpacity } from 'react-native';

const AppIntroFour = ({ navigation }: any) => {
    const selectionOnPress = (userType: any) => {
        return (
            setChangeColor(userType),
            setSelected(userType)
        )
    }
    const selectionOnPressOne = (userType: any) => {
        return (
            setChangeColor(userType),
            setSelected(userType)
        )
    }
    const selectionOnPressTwo = (userType: any) => {
        return (
            setChangeColor(userType),
            setSelected(userType)
        )
    }
    const [changeColor, setChangeColor] = useState('')
    const [check, setCheck] = useState(false)
    const [show, setShow] = useState('')
    const [selected, setSelected] = useState(false)

    return (
        <View style={styles.container}>
            <DefaultHeader onBackPress={() => navigation.goBack()} />
            <View style={styles.textView}>
                <MediumText
                    title={textConstants.AppIntroFour.Show}
                    style={styles.nameStyle}
                />
            </View>
            <View style={{ marginTop: RFPercentage(25), }}>
                <DefaultButton
                    onPress={() => [selectionOnPress("WOMAN"),]}
                    buttonStyle={[{ borderColor: changeColor === "WOMAN" ? colors.Red : colors.grey }, styles.defaultHeaderStyle]}
                    title={textConstants.AppIntroThree.Woman}
                    buttonTextStyle={{ color: colors.grey }}
                />
                <DefaultButton
                    onPress={() => [selectionOnPressOne("MAN")]}
                    buttonStyle={[{ borderColor: changeColor === "MAN" ? colors.Red : colors.grey, marginTop: RFValue(10)}, styles.defaultHeaderStyle]}
                    title={textConstants.AppIntroThree.Man}
                    buttonTextStyle={{ color: colors.grey }}
                />
                <DefaultButton
                    onPress={() => [selectionOnPressTwo("EVERYONE"),]}
                    // buttonViewStyle={{ alignItems: null }}
                    buttonStyle={[{flexDirection: "row", borderColor: changeColor === "EVERYONE" ? colors.Red : colors.grey,marginTop: RFValue(10)},styles.defaultHeaderStyle]}
                    title={textConstants.AppIntroFour.Everyone}
                    buttonTextStyle={{ color: colors.grey, }}
                />
            </View>
            {selected ?
                <DefaultButton
                    LinearGradientView="true"
                    onPress={() => navigation.navigate("AppIntroFive")}
                    title={textConstants.AppIntroOne.continue}
                    buttonViewStyle={[styles.buttonView, { opacity: selected ? 0.99 : 0.5, }]}
                /> :
                <DefaultButton
                    disabledTouch={!selected}
                    buttonStyle={{ backgroundColor: changeColor == '' ? colors.grey : colors.Red }}
                    title={textConstants.AppIntroOne.continue}
                    buttonViewStyle={[styles.buttonView, { opacity: selected ? 0.99 : 0.5, }]}
                />}
        </View>
    );
};
export default AppIntroFour;