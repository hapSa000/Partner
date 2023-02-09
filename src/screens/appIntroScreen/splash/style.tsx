import { StyleSheet } from 'react-native';
import { screenHeigth, screenWidth } from '../../../constants/dimensions/dimensions';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: screenHeigth * 0.250

    },
    img: {
        height: screenHeigth * 0.452,
        width: screenWidth * 0.452
    },
    imgView: {
        alignItems: "center",
        justifyContent: "center"
    },

});
export default styles;