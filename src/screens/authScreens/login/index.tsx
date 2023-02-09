import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../constants/imageConstants/images';
import Typography from '../../../constants/fontContants/font';
const Login = () => {
  return (
      <LinearGradient colors={["#e66465", "#9198e5"]} style={styles.container}>
        <View style={{ flexDirection: "row",alignItems:"center",justifyContent:"center", }}>
          <Image
            source={images.tinder}
            style={{ width: 35, height: 42, tintColor: "white", }}
          />
          <Text style={{color:"white",fontSize:50,marginLeft:5,fontFamily:Typography.latoBold}}>tinder</Text>
        </View>
        <View>
          <Text style={{}}>Welcome back,Ash!</Text>
        </View>
        {/* <View style={{ flexDirection: "row" }}>
          <Text>By clicking "Log in",you agree with our</Text>
          <Text style={{ borderBottomWidth: .5 }}>Terms.</Text>
          <Text style={{}}>Learn{"\n"}dfgdfg</Text>
        </View> */}
      </LinearGradient>
    // </View>
  );
};
export default Login
