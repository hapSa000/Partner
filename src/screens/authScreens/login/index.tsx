import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../constants/imageConstants/images';
import Typography from '../../../constants/fontContants/font';
import { screenHeigth } from '../../../constants/dimensions/dimensions';

const Login = () => {
  return (
    <LinearGradient colors={["#e66465", "#9198e5"]} style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={images.tinder}
          style={styles.tinderImg}
        />
        <Text style={styles.tinderText}>tinder</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.byClickText}>By clicking Log in, you agree with our </Text>
        <Text style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: "white", }]}>Terms</Text>
        <Text style={styles.byClickText}>.Learn</Text>
      </View>
      <View style={styles.PrivacyPolicyMainText}>
        <Text style={[styles.byClickText, { lineHeight: 20 }]}>how we process yout data in our </Text>
        <Text style={[styles.byClickText, { lineHeight: 20, borderBottomWidth: 1, borderBottomColor: "white", }]}>Privacy Policy</Text>
        <Text style={[styles.byClickText, { lineHeight: 20 }]}> and</Text>
      </View>
      <View style={styles.PrivacyPolicyMainText}>
        <Text style={[styles.byClickText, { borderBottomWidth: 1, borderBottomColor: "white", }]}>Cookies Policy</Text>
        <Text style={styles.byClickText}>.</Text>
      </View>
      <View style={styles.mainSocial}>
        <View style={styles.iconView}>
          <Image
            source={images.google}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: 25 }}>
          <Text style={styles.socialText}>LOG IN WITH GOOGLE</Text>
        </View>
      </View>
      <View style={[styles.mainSocial, { marginTop: screenHeigth * 0.02 }]}>
        <View style={styles.iconView}>
          <Image
            source={images.facebook}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.socialText}>LOG IN WITH FACEBOOK</Text>
        </View>
      </View>
      <View style={[styles.mainSocial, { marginTop: screenHeigth * 0.02 }]}>
        <View style={styles.iconView}>
          <Image
            source={images.speechBubble}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.socialText}>LOG IN WITH PHONE NUMBER</Text>
        </View>
      </View>
      <View style={styles.troubleView}>
        <Text style={[styles.socialText, { color: "white" }]}>Trouble logging in ? </Text>
      </View>
    </LinearGradient>
  );
};
export default Login;
