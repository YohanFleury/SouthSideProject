import React from 'react'
import { View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const GoBackBtn = () => {

   return (
      <TouchableWithoutFeedback onPress={() => null}>
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
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1
   }
})

export default GoBackBtn