import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppSelector } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DrawerNavigatorParams } from '../../navigation/DrawerNavigator/DrawerNavigator';

import colors from '../../config/colors'
import CustomText from '../CustomText/CustomText'
import ProfilPicture from '../ProfilPicture/ProfilPicture'
import routes from '../../navigation/routes';


const DrawerHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<DrawerNavigatorParams>>()
    const theme = useAppSelector(state => state.context.theme)

   return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <ProfilPicture size={45} source='https://randomuser.me/api/portraits/men/11.jpg' />
            <MaterialCommunityIcons 
               name="home" 
               size={27} 
               color={theme === 'dark' ? "white" : "black"} 
               onPress={() => navigation.navigate(routes.APPNAVIGATOR)} />
        </View>
        <CustomText style={{marginTop: 10, marginBottom: 5}} >Yohan F</CustomText>
        <CustomText style={styles.userName}>@yohfleury_95</CustomText>
        
        <View style={{height: 1, backgroundColor: colors.dark.primary, marginTop: 25}}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
   },
   userName: {
    fontSize: 16,
    color: colors.medium,
   }
})

export default DrawerHeader