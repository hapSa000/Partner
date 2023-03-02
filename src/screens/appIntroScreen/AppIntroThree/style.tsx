import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../constants/colorConstsnts/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    nameStyle: {
        fontSize: RFValue(38)
    },
    textView: {
        width: "55%",
        marginLeft: RFValue(55)
    },
    textStyleView: {
        marginTop: RFPercentage(20),
        width: "65%"
    },
    inputStyle: {
        paddingBottom: RFValue(1),
        paddingLeft: RFValue(1)
    },
    mediumText: {
        marginHorizontal: RFValue(55),
        width: "68%",
        fontSize: RFValue(12),
        // marginTop: RFValue(12),
        color: colors.grey
    },
    buttonView: {
        marginTop: RFPercentage(2),
    },
    img: {
        height: RFValue(18),
        width: RFValue(18)
    },
    showText: {
        fontSize: RFValue(12),
        marginLeft: RFValue(12),
        color: colors.grey
    }

});
export default styles;