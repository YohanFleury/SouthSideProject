import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomText from '../../components/CustomText/CustomText'

const LiveScreen = () => {
   return (
      <View style={styles.container}>
        <CustomText>Hellooooow world</CustomText>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default LiveScreen