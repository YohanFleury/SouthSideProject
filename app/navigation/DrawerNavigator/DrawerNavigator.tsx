import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { Dimensions } from 'react-native';

// Routes : 
import routes from '../routes'

// Screens : 
import WalletScreen from '../../screens/WalletScreen/WalletScreen'
import HomeNavigator from '../HomeNavigator/HomeNavigator'
import DrawerContent from '../../components/DrawerContent/DrawerContent'
import AppNavigator from '../AppNavigator/AppNavigator'

const Drawer = createDrawerNavigator()

export type DrawerNavigatorParams = {
    AppNavigator: undefined;
    Wallet: undefined;
    }

const DrawerNavigator = () => {
    return (
        
        <Drawer.Navigator 
            drawerContent={() => <DrawerContent />}
            screenOptions={{
                drawerType: 'slide',
            }}
            id="leftD"
        >
            <Drawer.Screen name={routes.APPNAVIGATOR} component={AppNavigator} options={{headerShown: false, swipeEdgeWidth: 500 }} />
            <Drawer.Screen name={routes.WALLET} component={WalletScreen} />
        </Drawer.Navigator>
        
    )
}

export default DrawerNavigator