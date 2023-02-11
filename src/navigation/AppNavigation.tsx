import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/appIntroScreen';
import { Login } from '../screens/authScreens';
import { ForgotPassword } from '../screens/authScreens';
import { LoginWithEmail } from '../screens/authScreens';
import { LoginWithNumber } from '../screens/authScreens';
import { TermAndCondition } from '../screens/authScreens';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                <Stack.Screen name="TermAndCondition" component={TermAndCondition} options={{ headerShown: false }} />
                <Stack.Screen name="LoginWithNumber" component={LoginWithNumber} options={{ headerShown: false }} />
                <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;