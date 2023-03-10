import React from 'react';
import { View, StyleSheet, } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons, Fontisto, Octicons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeNavigator, { HomeNavigatorParams } from '../HomeNavigator/HomeNavigator';

// Routes
import routes from '../routes'

// Screens : 
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
import ResearchNavigator from '../ResearchNavigator/ResearchNavigator';
import CreationScreen from '../../screens/CreationScreen/CreationScreen';

import colors from '../../config/colors';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { BlurView } from 'expo-blur';
import CreationNavigator from '../CreationNavigator/CreationNavigator';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {


    const navigation = useNavigation<NativeStackNavigationProp<HomeNavigatorParams>>()
    const isChatScreenVisible = useAppSelector(state => state.context.chatVisible)

    return (
        <Tab.Navigator tabBar={(props) => (
          <BlurView
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}
            tint="dark"
            intensity={100}
          >
            <BottomTabBar {...props} />
          </BlurView>
        )} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === routes.HOMENAVIGATOR) {
                  return <MaterialCommunityIcons onPress={() => navigation.navigate(routes.HOME)} name={focused ? 'home' : 'home-outline'} color={focused ? colors.white : colors.medium} size={29} />
              } else if (route.name === routes.RESEARCHNAVIGATOR) {
                return <Ionicons name="people" size={28} color={focused ? colors.white : colors.medium} />
              } else if (route.name === routes.NOTIFICATIONS) {
               return <Fontisto style={{marginBottom: 4}} name={focused ? "bell-alt" : "bell"} size={23} color={focused ? colors.white : colors.medium} />
              } else if (route.name === routes.CHAT) {
               return  <MaterialCommunityIcons name="treasure-chest" color={focused ? colors.white : colors.medium} size={26} />
              } else return (
                <View style={[styles.sousContainer, {borderColor: focused ? colors.white : colors.medium}]}>
                  <MaterialCommunityIcons name="plus-circle" size={27} color={colors.dark.primary} />
                </View>
              )
            },
            tabBarLabel:() => {return null},
            fullScreenGestureEnabled: true,
            tabBarStyle: {backgroundColor: 'transparent', height: 80, paddingTop: 10, display: isChatScreenVisible ? 'none' : 'flex'
             },
             
          })}>
            <Tab.Screen 
              name={routes.HOMENAVIGATOR} 
              component={HomeNavigator} 
              options={{headerShown: false,}}  />
            <Tab.Screen name={routes.RESEARCHNAVIGATOR} component={ResearchNavigator} options={{headerShown: false,}} />
            <Tab.Screen name={routes.CREATIONNAVIGATOR} component={CreationNavigator} options={{headerShown: false}}  />
            <Tab.Screen name={routes.NOTIFICATIONS} component={NotificationScreen} options={{headerShown: false}}  />
            <Tab.Screen name={routes.CHAT} component={ChatScreen} options={{headerShown: false,}} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
       backgroundColor: colors.white,
       height: 55,
       width: 55,
       borderRadius: 22.5,
       justifyContent: 'center',
      alignItems: 'center'
   },
   sousContainer: {
      borderWidth: 1,
      height: 40,
      width: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',

  }
})


export default AppNavigator