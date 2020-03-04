import React from 'react';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
// import RegistrationType from './src/screens/Registration-type';

import { RegistrationRouts } from './src/routes';

interface IApp {
}

const App: React.FC<IApp> = ({}) => {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registration" component={RegistrationRouts}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;