import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import CustomText from '../../components/CustomText/CustomText'

const ChatScreen = () => {

  
   return (
    <CustomScreen>
      <View style={styles.container}>
        <CustomText>En cours de développement...</CustomText>
      </View>
    </CustomScreen>
   )
}

const styles = StyleSheet.create({
   container: {},
   
})


export default ChatScreen
