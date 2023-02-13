import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../constants/imageConstants/images';
import { screenHeigth, screenWidth } from '../../../constants/dimensions/dimensions';
import { BoldText, RegularText } from '../../../component/CommonText';
import { textConstants } from '../../../constants/textConstants/textConstants';
import colors from '../../../constants/colorConstsnts/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Login = ({ navigation }: any) => {
  return (
    <LinearGradient colors={[colors.Primary, colors.Secondary]} style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={images.tinder}
          style={styles.tinderImg}
        />
        <BoldText style={styles.tinderText} title={textConstants.login.text} />
      </View>
      <View style={styles.mainView}>
        <RegularText style={styles.byClickText} title={textConstants.login.heading} />
        <BoldText style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.terms} />
        <BoldText style={styles.byClickText} title={textConstants.login.learn} />
      </View>
      <View style={styles.PrivacyPolicyMainText}>
        <BoldText style={[styles.byClickText, { lineHeight: hp('3%') }]} title={textConstants.login.headingTwo} />
        <BoldText style={[styles.byClickText, { lineHeight: hp('2.5%'), borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.PrivacyPolicy} />
        <BoldText style={[styles.byClickText, { lineHeight: hp('3%') }]} title={textConstants.login.and} />
      </View>
      <View style={styles.PrivacyPolicyMainText}>
        <BoldText style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.cookies} />
        <BoldText style={styles.byClickText} title={textConstants.login.dot} />
      </View>
      <View style={styles.mainSocial}>
        <View style={styles.iconView}>
          <Image
            source={images.google}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: wp('8%') }}>
          <BoldText style={styles.socialText} title={textConstants.login.google} />
        </View>
      </View>
      <View style={[styles.mainSocial, { marginTop: hp('2%') }]}>
        <View style={styles.iconView}>
          <Image
            source={images.facebook}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: wp("6%") }}>
          <BoldText style={styles.socialText} title={textConstants.login.facebook} />
        </View>
      </View>
      <View style={[styles.mainSocial, { marginTop: hp('2%') }]}>
        <View style={styles.iconView}>
          <Image
            source={images.speechBubble}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: wp('2%') }}>
          <BoldText style={styles.socialText} title={textConstants.login.phoneNum} />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("ForgotPassword")} style={styles.troubleView}>
        <BoldText style={[styles.socialText, { color: colors.White }]} title={textConstants.login.truble} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default Login;

