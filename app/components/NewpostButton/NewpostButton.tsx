import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

type npBtn = {
    onPress: () => void;
}

const NewpostButton: React.FC<npBtn> = ({ onPress }) => {
    return (
          <TouchableHighlight onPress={onPress} style={styles.sousContainer}>
          <MaterialCommunityIcons name="plus-circle" size={27} color={colors.dark.primary} />
          </TouchableHighlight>
     )
}

const styles = StyleSheet.create({
    container: {
         backgroundColor: colors.white,
         height: 55,
         width: 55,
         borderRadius: 22.5,
         justifyContent: 'center',
        alignItems: 'center'
     },
     sousContainer: {
        borderWidth: 1,
        borderColor: colors.medium,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
 
    }
 })
 

export default NewpostButton