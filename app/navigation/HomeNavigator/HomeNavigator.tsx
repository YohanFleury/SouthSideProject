import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Foundation } from '@expo/vector-icons';

import routes from '../routes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type HomeNavigatorParams = {
    Home: undefined;
    }
const Stack = createNativeStackNavigator<HomeNavigatorParams>()

const HomeNavigator = ({navigation}: any) => {

    return (
    <Stack.Navigator>
        <Stack.Screen name={routes.HOME} component={HomeScreen} options={
         {headerTitle: () => {
         return (
            <FontAwesome onPress={() => navigation.openDrawer()} name="user-circle-o" size={27} color={colors.dark.primary} />
            
         )
         }, 
         headerShown: true, fullScreenGestureEnabled: true, headerStyle: {backgroundColor: colors.dark.background}}
         
        } 
        
        />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default HomeNavigator