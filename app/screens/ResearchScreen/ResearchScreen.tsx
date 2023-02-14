import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard, Pressable } from 'react-native'
import { Octicons } from '@expo/vector-icons';

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import CustomText from '../../components/CustomText/CustomText'

const ResearchScreen = () => {

    const [textSearch, setTextSearch] = useState<string>('')
    const [focus, setFocus] = useState<boolean>(false)
    
    useEffect(() => {
      console.log(textSearch)
    }, [textSearch])
    
    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

   return (
      <CustomScreen>
        <View style={styles.header}>
            <View style={{width:"80%"}}>
            <CustomInput 
                placeholder='Rechercher un utilsateur' 
                onChangeText={(e) => setTextSearch(e)} 
                returnKeyType="search"
                onSubmitEditing={onCancel}
                width="90%"
                value={textSearch}
                onFocus={() => setFocus(true)}
            />
            </View>
            {focus &&
            <Pressable onPress={onCancel}>
                <CustomText>Annuler</CustomText>
            </Pressable>}
            {!focus &&
            <Octicons name="filter" size={24} color="white" />
            }
        </View>
      </CustomScreen>
   )
}

const styles = StyleSheet.create({
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between'
   }
})

export default ResearchScreen