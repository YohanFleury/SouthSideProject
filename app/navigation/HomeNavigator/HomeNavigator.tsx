import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';

import routes from '../routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import NewPostScreen from '../../screens/NewPostScreen/NewPostScreen';

export type HomeNavigatorParams = {
    Home: undefined;
    NewPost: undefined;
    }
const Stack = createNativeStackNavigator<HomeNavigatorParams>()

const HomeNavigator = ({navigation}: any) => {

    return (
    <Stack.Navigator>
        <Stack.Screen name={routes.HOME} component={HomeScreen} options={
         {
         headerShown: false, fullScreenGestureEnabled: true, headerStyle: {backgroundColor: colors.dark.background}}
         
        } 
        
        />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeNavigator