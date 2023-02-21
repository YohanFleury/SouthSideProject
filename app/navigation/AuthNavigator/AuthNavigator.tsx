import React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen'
import routes from '../routes'

export type AuthRoutesParams = {
   Login: undefined;
   Register: undefined;
}

const Stack = createNativeStackNavigator<AuthRoutesParams>()

const AuthNavigator = () => {
   return (
      <Stack.Navigator initialRouteName={routes.LOGIN}>
         <Stack.Screen name={routes.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name={routes.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
   )
}


export default AuthNavigator