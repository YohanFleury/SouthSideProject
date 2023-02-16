import React from 'react'
import { createDrawerNavigator, } from '@react-navigation/drawer'

// Routes : 
import routes from '../routes'

// Screens : 
import WalletScreen from '../../screens/WalletScreen/WalletScreen'
import ResearchScreen from '../../screens/ResearchScreen/ResearchScreen'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={routes.RESEARCH} component={ResearchScreen} />
            <Drawer.Screen name={routes.WALLET} component={WalletScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator