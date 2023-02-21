import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { auth } from '../../../config/firebase'
import { signOut } from 'firebase/auth'

import CustomButton from '../CustomButton/CustomButton'
import { BlurView } from 'expo-blur'

import CustomScreen from '../CustomScreen/CustomScreen'
import CustomText from '../CustomText/CustomText'
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';

const DrawerContent = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const onSignOut = () => {
        setLoading(true)
        signOut(auth)
        .then(() => setLoading(false))
        .catch(error => {
            setLoading(false)
             Alert.alert('Le problème suivant est survenu : ', error)
            })
    }
   return (
    <CustomScreen>
            <AntDesign style={styles.logOut} name="logout" size={24} color="white" onPress={onSignOut} />
        <ActivityIndicator visible={loading} />
        <View style={styles.container}>
            <CustomText>Menu</CustomText>
        </View>
  </CustomScreen>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent:'space-between',
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