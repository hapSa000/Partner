import { StyleSheet } from 'react-native';
import { screenHeigth, screenWidth } from '../../../constants/dimensions/dimensions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constants/colorConstsnts/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Typography from '../../../constants/fontConstants/fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: screenHeigth * 0.18
    },
    tinderImg: {
        width: RFValue(42),
        height: RFValue(42),
        tintColor: colors.White,
    },
    tinderText: {
        color: colors.White,
        fontSize: RFValue(45),
        marginLeft: screenWidth * 0.001,
        marginTop: screenHeigth * -0.01
    },
    byClickText: {
        color: colors.White,
        fontSize: RFValue(13),

    },
    PrivacyPolicyMainText: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
    },
    mainSocial: {
        flexDirection: "row",
        marginTop: screenHeigth * 0.04,
        backgroundColor: colors.White,
        marginHorizontal: screenWidth * 0.06,
        borderRadius: 30,
        alignItems: "center",
        // justifyContent:"center",
        paddingVertical: screenHeigth * 0.02,
    },
    iconView: {
        paddingHorizontal: screenWidth * 0.06
    },
    icon: {
        width: RFValue(22), height: RFValue(22)
    },
    socialText: {
        color: colors.Black,
        fontSize: RFValue(14),
    },
    troubleView: {
        marginTop: screenHeigth * 0.04,
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: screenHeigth * 0.04
    }
});
export default styles;

// container: {
//     flex: 1,
// },
// mainView: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: hp('23%')
// },
// tinderImg: {
//     width: 38,
//     height: 45,
//     tintColor: colors.White,
// },
// tinderText: {
//     color: colors.White,
//     fontSize: hp('6%'),
//     marginLeft: wp('1.5%'),
//     marginTop: hp('-1%')
// },
// byClickText: {
//     color: colors.White,
//     fontSize: hp('1.8%'),
// },
// PrivacyPolicyMainText: {
//     justifyContent: "center",
//     alignItems: 'center',
//     flexDirection: "row",
// },
// mainSocial: {
//     flexDirection: "row",
//     marginTop: hp('5.2%'),
//     backgroundColor: colors.White,
//     marginHorizontal: wp("7%"),
//     borderRadius: 30,
//     paddingVertical: hp("2.4%"),
// },
// iconView: {
//     paddingHorizontal: wp("6%")
// },
// icon: {
//     width: 22, height: 22
// },
// socialText: {
//     color: colors.Black,
//     fontSize: hp("1.90%"),
// },
// troubleView: {
//     marginTop: hp("3.5%"),
//     alignItems: "center",
//     justifyContent: "center"
// }