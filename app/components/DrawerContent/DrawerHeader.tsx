import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import CustomText from '../CustomText/CustomText'
import ProfilPicture from '../ProfilPicture/ProfilPicture'

const DrawerHeader = () => {
   return (
      <View style={styles.container}>
        <ProfilPicture size={45} source='https://randomuser.me/api/portraits/men/11.jpg' />
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