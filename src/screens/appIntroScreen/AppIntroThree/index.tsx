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

const AppIntroThree = ({ navigation }: any) => {
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
                    title={textConstants.AppIntroThree.Iam}
                    style={styles.nameStyle}
                />
            </View>
            <View style={{ marginTop: RFPercentage(25), }}>
                <DefaultButton
                    onPress={() => [selectionOnPress("WOMAN"),]}
                    buttonStyle={{ paddingVertical: RFValue(12), height: RFValue(42), backgroundColor: colors.White, borderColor: changeColor === "WOMAN" ? colors.Red : colors.grey }}
                    title={textConstants.AppIntroThree.Woman}
                    buttonTextStyle={{ color: colors.grey }}
                />
                <DefaultButton
                    onPress={() => [selectionOnPressOne("MAN")]}
                    buttonStyle={{ paddingVertical: RFValue(12), height: RFValue(42), marginTop: RFValue(10), backgroundColor: colors.White, borderColor: changeColor === "MAN" ? colors.Red : colors.grey }}
                    title={textConstants.AppIntroThree.Man}
                    buttonTextStyle={{ color: colors.grey }}
                />
                <DefaultButton
                    onPress={() => [selectionOnPressTwo("MORE"),]}
                    // buttonViewStyle={{ alignItems: null }}
                    buttonStyle={{ paddingVertical: RFValue(12), height: RFValue(42), marginTop: RFValue(10), backgroundColor: colors.White, borderColor: changeColor === "MORE" ? colors.Red : colors.grey, flexDirection: "row", }}
                    title={textConstants.AppIntroThree.More}
                    buttonTextStyle={{ color: colors.grey, marginLeft: RFPercentage(16) }}
                    image
                    source={images.next}
                    imgStyle={{ marginLeft: RFPercentage(14) }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: RFPercentage(28) }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setCheck(!check)}>
                    <Image
                        source={check ? images.checked : images.unChecked}
                        resizeMode="contain"
                        style={styles.img}
                    />
                </TouchableOpacity>
                <MediumText
                    title={textConstants.AppIntroThree.show}
                    style={styles.showText}
                />
            </View>
            {selected ?
                <DefaultButton
                    LinearGradientView="true"
                    onPress={() => navigation.navigate("AppIntroFour")}
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
export default AppIntroThree;