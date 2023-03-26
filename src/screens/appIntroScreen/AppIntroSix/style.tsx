import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../constants/colorConstsnts/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    nameStyle: {
        fontSize: RFValue(32)
    },
    selectStyle: {
        fontSize: RFValue(15)
    },
    textView: {
        width: "63%",
        marginLeft: RFValue(55)
    },
    inputStyleView: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginHorizontal: RFValue(45),
        marginTop: RFPercentage(20),
        width: "70%",
    },
    inputStyle: {
        paddingBottom: RFValue(1),
        paddingLeft: RFValue(1),
        fontSize: RFValue(20),

    },
    mediumText: {
        marginHorizontal: RFValue(48),
        width: "68%",
        fontSize: RFValue(13),
        marginTop: RFValue(12),
        color: colors.grey
    },
    buttonView: {
        marginTop: RFPercentage(2)
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