import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import TouchableView from '../../../component/TouchableView';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = ({ navigation }: any) => {
  // function alert(arg0: string) {
  //   throw new Error('Function not implemented.');
  // }


  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId: '813122540386-qv9bnsrsq5a6banu2u2k7kalu2p0h06g.apps.googleusercontent.com',
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Message>>>>>>>>', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (
        error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
      ) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error("error", error)
    }
    setGettingLoginStatus(false);
  };

  return (
    <LinearGradient colors={[colors.Primary, colors.Secondary]} style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <Image
            source={images.logoNoBack}
            style={styles.tinderImg}
          />
          <BoldText style={styles.tinderText} title={textConstants.login.text} />
        </View>
        <View style={[styles.mainView, { marginTop: screenHeigth * 0.240 }]}>
          <RegularText style={styles.byClickText} title={textConstants.login.heading} />
          <BoldText onPress={() => navigation.navigate('WebOpen', {
            title: textConstants.login.terms,
            URL: 'https://www.freeprivacypolicy.com/live/36c599de-caee-4b4a-80ea-74799929cd0b',
          })} style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.terms} />
          <BoldText style={styles.byClickText} title={textConstants.login.learn} />
        </View>
        <View style={styles.PrivacyPolicyMainText}>
          <BoldText style={[styles.byClickText, { lineHeight: screenHeigth * 0.02 }]} title={textConstants.login.headingTwo} />
          <BoldText onPress={() => navigation.navigate('WebOpen', {
            title: textConstants.login.PrivacyPolicy,
            URL: 'https://www.freeprivacypolicy.com/live/36c599de-caee-4b4a-80ea-74799929cd0b',
          })}
            style={[styles.byClickText, { lineHeight: screenHeigth * 0.025, borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.PrivacyPolicy} />
          <BoldText style={[styles.byClickText, { lineHeight: screenHeigth * 0.02 }]} title={textConstants.login.and} />
        </View>
        <View style={styles.PrivacyPolicyMainText}>
          <BoldText onPress={() => navigation.navigate('WebOpen', {
            title: textConstants.login.cookies,
            URL: 'https://www.freeprivacypolicy.com/live/36c599de-caee-4b4a-80ea-74799929cd0b',
          })} style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: colors.White, }]} title={textConstants.login.cookies} />
          <BoldText style={styles.byClickText} title={textConstants.login.dot} />
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={() =>
          _signIn()
          // Alert.alert("Hello! I am an alert box!!")
        } style={styles.mainSocial}>
          <View style={styles.iconView}>
            <Image
              source={images.google}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={{ marginLeft: screenWidth * 0.075 }}>
            <BoldText style={styles.socialText} title={textConstants.login.google} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => _signOut()} style={[styles.mainSocial, { marginTop: screenHeigth * 0.020 }]}>
          <View style={styles.iconView}>
            <Image
              source={images.facebook}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={{ marginLeft: screenWidth * 0.055 }}>
            <BoldText style={styles.socialText} title={textConstants.login.facebook} />
          </View>
        </TouchableOpacity>
        <View style={[styles.mainSocial, { marginTop: screenHeigth * 0.020 }]}>
          <View style={styles.iconView}>
            <Image
              source={images.speechBubble}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={{ marginLeft: screenWidth * 0.02 }}>
            <BoldText style={styles.socialText} title={textConstants.login.phoneNum} />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={() => [navigation.navigate("ForgotPassword"),]} style={styles.troubleView}>
          <BoldText style={[styles.socialText, { color: colors.White }]} title={textConstants.login.truble} />
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};
export default Login;

{/* <LinearGradient colors={[colors.Primary, colors.Secondary]} style={styles.container}>
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
</LinearGradient> */}