import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Login } from './src/screens/authScreens'
import Splash from './src/screens/appIntroScreen/splash'
import AppNavigator from './src/navigation/AppNavigation'

const App = ({ navigation }: any) => {
 
  return (
    <View style={{ flex: 1 }}>
      {/* <Splash/> */}
      {/* <Login/> */}
      <AppNavigator />
    </View>
  )
}

export default App