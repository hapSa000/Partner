import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './style'
import DefaultHeader from '../../../component/DefaultHeader';
import { BoldText, MediumText } from '../../../component/CommonText';
import { textConstants } from '../../../constants/textConstants/textConstants';
import DefaultButton from '../../../component/DefaultButton';
import colors from '../../../constants/colorConstsnts/colors';
import images from '../../../constants/imageConstants/images';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const AppIntroSix = ({ navigation }: any) => {

    const [text, setText] = useState('')
    const [check, setCheck] = useState(false)

    const DATA = [
        {
            id: 1,
            title: textConstants.AppIntroSix.straight
        },
        {
            id: 2,
            title: textConstants.AppIntroSix.Gay
        },
        {
            id: 3,
            title: textConstants.AppIntroSix.Lesbian
        },
        {
            id: 4,
            title: textConstants.AppIntroSix.Bisexual
        },
        {
            id: 5,
            title: textConstants.AppIntroSix.Asexual
        },
        {
            id: 6,
            title: textConstants.AppIntroSix.Demisexual
        },
        {
            id: 7,
            title: textConstants.AppIntroSix.Pansexual
        },
        {
            id: 8,
            title: textConstants.AppIntroSix.Queer
        },
    ]

    const renderItem = ({ item }: any) => {
        return (
            <View style={{ marginHorizontal: RFValue(65), paddingVertical: RFValue(14), borderBottomWidth: .5, }}>
                <MediumText title={item.title} style={{ marginLeft: RFValue(10) }} />
                {/* <View style={{ width: "100%", marginTop: RFValue(5), height: 2, backgroundColor: "red", marginHorizontal: -15 }}></View> */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <DefaultHeader title="SKIP" endText={{ color: colors.Secondary }} style={{ justifyContent: "space-between" }} onBackPress={() => navigation.goBack()} />
            <View style={styles.textView}>
                <MediumText
                    title={textConstants.AppIntroSix.Sexual}
                    style={styles.nameStyle}
                />
            </View>
            <View style={{ marginTop: RFValue(15), marginLeft: RFValue(55) }}>
                <MediumText
                    title={textConstants.AppIntroSix.Select}
                    style={styles.selectStyle}
                />
            </View>
            <View style={{ marginTop: RFValue(15) }}>
                <FlatList
                    data={DATA}
                    // style={{ backgroundColor: "red", }}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: RFValue(18) }}>
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
            {/* {text != '' ?
                <DefaultButton
                    LinearGradientView="true"
                    title={textConstants.AppIntroOne.continue}
                    buttonViewStyle={[styles.buttonView, { opacity: text ? 0.99 : 0.5, }]}
                // onPress={() => navigation.navigate('AppIntroTwo')}
                /> : */}
            {/* <DefaultButton
                    disabledTouch={!text}
                    buttonStyle={{ backgroundColor: text == '' ? colors.grey : colors.Red }}
                    title={textConstants.AppIntroOne.continue}
                    buttonViewStyle={[styles.buttonView, { opacity: text ? 0.99 : 0.5, }]}
                /> */}
            <DefaultButton
                buttonStyle={{ backgroundColor: colors.grey }}
                title={textConstants.AppIntroOne.continue}
                buttonViewStyle={[styles.buttonView,]}
            />
            {/* } */}
        </View>
    );
};
export default AppIntroSix;