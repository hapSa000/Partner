import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  AppIntroOne,
  AppIntroTwo,
  AppIntroThree,
  AppIntroFour,
  AppIntroFive,
  AppIntroSix,
} from '../screens/appIntroScreen';
import {
  Login,
  ForgotPassword,
  LoginWithEmail,
  LoginWithNumber,
  TermAndCondition,
  PrivacyPolicy,
  AboutUs,
} from '../screens/authScreens';
import WebOpen from '../component/WebView';
// import {Chat, Home} from '../screens/appScreens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermAndCondition"
          component={TermAndCondition}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginWithNumber"
          component={LoginWithNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginWithEmail"
          component={LoginWithEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebOpen"
          component={WebOpen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroOne"
          component={AppIntroOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroTwo"
          component={AppIntroTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroThree"
          component={AppIntroThree}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="AppIntroFour"
          component={AppIntroFour}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroFive"
          component={AppIntroFive}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroSix"
          component={AppIntroSix}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroFour"
          component={AppIntroFour}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroFive"
          component={AppIntroFive}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppIntroSix"
          component={AppIntroSix}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
