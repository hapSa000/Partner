import { StyleSheet } from 'react-native';
import { screenHeigth } from '../../../constants/dimensions/dimensions';
import Typography from '../../../constants/fontContants/font';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: screenHeigth * 0.220
    },
    tinderImg: {
        width: 38,
        height: 45,
        tintColor: "white",
    },
    tinderText: {
        color: "white",
        fontSize: 50,
        marginLeft: 8,
        fontFamily: Typography.latoBold,
        marginTop: screenHeigth * -0.005
    },
    byClickText: {
        color: "white",
        fontSize: 16,
        fontFamily: Typography.latoBold,
    },
    PrivacyPolicyMainText: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
    },
    mainSocial: {
        flexDirection: "row",
        marginTop: screenHeigth * 0.05,
        backgroundColor: "white",
        marginHorizontal: 30,
        borderRadius: 30,
        paddingVertical: 20,
    },
    iconView: {
        paddingHorizontal: 25
    },
    icon: {
        width: 20, height: 20
    },
    socialText: {
        color: "black",
        fontSize: 15,
        fontFamily: Typography.latoBold
    },
    troubleView: {
        marginTop: screenHeigth * 0.040,
        alignItems: "center",
        justifyContent: "center"
    }
});
export default styles;