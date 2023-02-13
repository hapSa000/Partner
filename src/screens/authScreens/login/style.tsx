import { StyleSheet } from 'react-native';
import { screenHeigth } from '../../../constants/dimensions/dimensions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constants/colorConstsnts/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('23%')
    },
    tinderImg: {
        width: 38,
        height: 45,
        tintColor: colors.White,
    },
    tinderText: {
        color: colors.White,
        fontSize: hp('6%'),
        marginLeft: wp('1.5%'),
        marginTop: hp('-1%')
    },
    byClickText: {
        color: colors.White,
        fontSize: hp('1.8%'),
    },
    PrivacyPolicyMainText: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
    },
    mainSocial: {
        flexDirection: "row",
        marginTop: hp('5.2%'),
        backgroundColor: colors.White,
        marginHorizontal: wp("7%"),
        borderRadius: 30,
        paddingVertical: hp("2.4%"),
    },
    iconView: {
        paddingHorizontal: wp("6%")
    },
    icon: {
        width: 22, height: 22
    },
    socialText: {
        color: colors.Black,
        fontSize: hp("1.90%"),
    },
    troubleView: {
        marginTop: hp("3.5%"),
        alignItems: "center",
        justifyContent: "center"
    }
});
export default styles;

