import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Routes
import routes from '../routes'

// Screens : 
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';
import ResearchScreen from '../../screens/ResearchScreen/ResearchScreen';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import ResearchNavigator from '../ResearchNavigator/ResearchNavigator';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.RESEARCHNAVIGATOR} component={ResearchNavigator} options={{headerShown: false}} />
            <Tab.Screen name={routes.NOTIFICATIONS} component={NotificationScreen} options={{headerShown: false}} />
            <Tab.Screen name={routes.CHAT} component={ChatScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default AppNavigator