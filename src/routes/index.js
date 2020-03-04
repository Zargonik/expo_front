import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationType from '../screens/registration/Registration-type';
import PhoneNumber from '../screens/registration/Phone-number';
import UserName from '../screens/registration/User-name';
import Email from '../screens/registration/Email';
import Password from '../screens/registration/Password';

import BackButton from '../components/Buttons/Back-button';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export const RegistrationRouts = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegistrationType"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="RegistrationType"
        component={RegistrationType}
      />
      <Stack.Screen
        name="EnterPhoneNumber"
        component={PhoneNumber}
      />
      <Stack.Screen
        name="EnterEmail"
        component={Email}
      />
      <Stack.Screen
        name="EnterUserName"
        component={UserName}
      />
      <Stack.Screen
        name="EnterPassword"
        component={Password}
      />
    </Stack.Navigator>
  )
}