import React from 'react'
import { View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import colors from '../../config/colors';

const GoBackBtn = () => {
   const navigation = useNavigation()

   return (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color={colors.white} />
        </View>
      </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 15,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
   }
})

export default GoBackBtn