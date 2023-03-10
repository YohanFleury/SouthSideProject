import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '../routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
import HomeandChatScreen from '../../screens/HomeandChatScreen/HomeandChatScreen';
import { useAppSelector } from '../../redux/store';

export type HomeNavigatorParams = {
    Home: undefined;
    NewPost: undefined;
    Chat: undefined;
    Drawer: undefined;
    }
const Stack = createNativeStackNavigator<HomeNavigatorParams>()

const HomeNavigator = ({navigation}: any) => {
    const isChatScreenVisible = useAppSelector(state => state.context.chatVisible)
    return (
    <Stack.Navigator screenOptions={{
      }}>
        <Stack.Screen name={routes.HOME} component={HomeandChatScreen} options={{
         headerShown: false, 
         headerTransparent: true,
         headerBlurEffect: 'dark',
         headerTintColor: 'transparent',
         headerLeft: undefined,
         gestureDirection: 'horizontal',
         fullScreenGestureEnabled: true,
         gestureEnabled: !isChatScreenVisible
        }} 
        
        />
        <Stack.Screen name={routes.CHAT} component={ChatScreen} options={{
            fullScreenGestureEnabled: true,
            animation: 'slide_from_right',
            gestureDirection: 'horizontal',
            gestureEnabled: false,
            
        }} />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeNavigator