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
        letterSpacing: 1.8,
        marginHorizontal: RFValue(55),
        width: "90%",
        fontSize: RFValue(15),
        // marginTop: RFValue(12),
        color: colors.grey
    },
    buttonView: {
        marginTop: RFPercentage(42)
    }

});
export default styles;