import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';



import CustomButton from '../CustomButton/CustomButton'
import { BlurView } from 'expo-blur'

import CustomScreen from '../CustomScreen/CustomScreen'
import CustomText from '../CustomText/CustomText'
import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';

const DrawerContent = () => {


  
   return (
    <CustomScreen>
        <View style={styles.container}>
            <DrawerHeader />
            <DrawerBody />
        </View>
  </CustomScreen>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15
   },
   logOut: {
    position: "absolute",
    bottom: 15,
    left: 30
   }
})

export default DrawerContent