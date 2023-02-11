import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from './src/navigation/AppNavigation'

const App = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  )

};

export default App;
