import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../routes';
import CreationScreen from '../../screens/CreationScreen/CreationScreen';
import NewPostScreen from '../../screens/NewPostScreen/NewPostScreen';
import SurveyScreen from '../../screens/SurveyScreen/SurveyScreen';
import colors from '../../config/colors';


export type CreationNavigatorParams = {
    Creation: undefined;
    NewPost: undefined;
    Survey: undefined;
    }
const Stack = createNativeStackNavigator<CreationNavigatorParams>()

const CreationNavigator = () => {
   return (
    <Stack.Navigator screenOptions={{
    }}>
      <Stack.Screen name={routes.CREATION} component={CreationScreen} options={{
       headerShown: false, 
       fullScreenGestureEnabled: true,
       headerTransparent: true,
       headerBlurEffect: 'dark',
       headerTintColor: 'transparent',
       gestureDirection: 'horizontal',
      }} 
      
      />
      <Stack.Screen name={routes.NEWPOST} component={NewPostScreen} options={{
          fullScreenGestureEnabled: true,
          headerShown: false,
      }} />
      <Stack.Screen name={routes.SURVEY} component={SurveyScreen} options={{
          fullScreenGestureEnabled: true,
          headerShown: true,
          animation: 'fade_from_bottom',
          headerTintColor: colors.white,
          headerBackTitle: '',
          headerTitle: 'Sondage',
          headerStyle: {backgroundColor: colors.dark.background}
      }} />
  </Stack.Navigator>
   )
}

export default CreationNavigator