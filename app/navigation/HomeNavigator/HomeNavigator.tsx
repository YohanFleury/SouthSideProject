import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';

export type HomeNavigatorParams = {
    Home: undefined;
    NewPost: undefined;
    Chat: undefined;
    Drawer: undefined;
    }
const Stack = createNativeStackNavigator<HomeNavigatorParams>()

const HomeNavigator = ({navigation}: any) => {

    return (
    <Stack.Navigator screenOptions={{
      }}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} options={{
         headerShown: false, 
         fullScreenGestureEnabled: true,
         headerTransparent: true,
         headerBlurEffect: 'dark',
         headerTintColor: 'transparent',
         gestureDirection: 'horizontal',
        }} 
        
        />
        <Stack.Screen name={routes.CHAT} component={ChatScreen} options={{
            fullScreenGestureEnabled: true,
            animation: 'slide_from_right',
        }} />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeNavigator