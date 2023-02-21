import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {MaterialCommunityIcons, Fontisto, Octicons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeNavigator, { HomeNavigatorParams } from '../HomeNavigator/HomeNavigator';

// Routes
import routes from '../routes'

// Screens : 
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
import ResearchScreen from '../../screens/ResearchScreen/ResearchScreen';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import ResearchNavigator from '../ResearchNavigator/ResearchNavigator';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

import colors from '../../config/colors';
import WalletScreen from '../../screens/WalletScreen/WalletScreen';
import NewPostScreen from '../../screens/NewPostScreen/NewPostScreen';
import NewpostButton from '../../components/NewpostButton/NewpostButton';
import { useAppDispatch } from '../../redux/store';
import { setOpenNewPostModal } from '../../redux/userTestSlice';
import { View } from 'react-native';

const Tab = createBottomTabNavigator()

const DefaultComponent = () => <View></View>

const AppNavigator = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeNavigatorParams>>()
    const dispatch = useAppDispatch()

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === routes.HOMENAVIGATOR) {
                  return <MaterialCommunityIcons onPress={() => navigation.navigate(routes.HOME)} name={focused ? 'home' : 'home-outline'} color={focused ? colors.dark.primary : colors.white} size={27} />
              } else if (route.name === routes.RESEARCHNAVIGATOR) {
                return <Octicons name="search" size={23} color={focused ? colors.dark.primary : colors.white} />
              } else if (route.name === routes.NOTIFICATIONS) {
               return <Fontisto style={{marginBottom: 4}} name={focused ? "bell-alt" : "bell"} size={21} color={focused ? colors.dark.primary : colors.white} />
              } else if (route.name === routes.CHAT) {
               return  <MaterialCommunityIcons name="treasure-chest" color={focused ? colors.dark.primary : colors.white} size={26} />
              } else return <NewpostButton onPress={() => {
                dispatch(setOpenNewPostModal(true))
                navigation.navigate(routes.NEWPOST)
              }}/>
            },
            tabBarLabel:() => {return null},
            fullScreenGestureEnabled: true,
            tabBarStyle: {backgroundColor: colors.dark.background}
          })}>
            <Tab.Screen name={routes.HOMENAVIGATOR} component={HomeNavigator} options={{headerShown: false,}}  />
            <Tab.Screen name={routes.RESEARCHNAVIGATOR} component={ResearchNavigator} options={{headerShown: false}} />
            <Tab.Screen name={routes.NEWPOST} component={NewPostScreen} options={{headerShown: false}} listeners={() => ({tabPress: event => event.preventDefault()})} />
            <Tab.Screen name={routes.NOTIFICATIONS} component={NotificationScreen} options={{headerShown: false}}  />
            <Tab.Screen name={routes.CHAT} component={ChatScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default AppNavigator