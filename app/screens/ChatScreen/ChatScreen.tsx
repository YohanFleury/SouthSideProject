import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomScreen from '../../components/CustomScreen/CustomScreen'

const ChatScreen = () => {
   return (
    <CustomScreen>
      <View style={styles.container}>
        <Text>Coucou</Text>
      </View>
    </CustomScreen>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default ChatScreen