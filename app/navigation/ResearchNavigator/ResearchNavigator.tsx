import React from 'react'
import { View, StyleSheet, ImageSourcePropType } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../routes';
import ResearchScreen from '../../screens/ResearchScreen/ResearchScreen';
import ProfilScreen from '../../screens/ProfilScreen/ProfilScreen';

export type ResearchRoutesParams = {
    Research: undefined;
    Profil: {
        id: number;
        name: string;
        username: string;
        description: string;
        profilPicture: ImageSourcePropType;
        isCertified: boolean;
    };
}

const Stack = createNativeStackNavigator<ResearchRoutesParams>()

const ResearchNavigator = () => {
   return (
    <Stack.Navigator>
        <Stack.Screen name={routes.RESEARCH} component={ResearchScreen} options={{
                headerShown: false, 
                fullScreenGestureEnabled: true,
                gestureEnabled: true,
                }} />
        <Stack.Screen 
            name={routes.PROFIL} 
            component={ProfilScreen} 
            options={{
                headerShown: false, 
                fullScreenGestureEnabled: true,
                gestureEnabled: true
                }} />
    </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default ResearchNavigator