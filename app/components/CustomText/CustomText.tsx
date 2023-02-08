import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { useAppSelector } from '../../redux/store'
import colors from '../../config/colors'


type TextProp = {
    children: string
}

const CustomText:React.FC<TextProp> = ({children}) => {

    const theme = useAppSelector((state) => state.context.theme)

   return (
      <Text style={[styles.police, {color: theme === "dark" ? colors.dark.texte : colors.light.texte}]}>{children}</Text>
   )
}

const styles = StyleSheet.create({
   police: {
    fontSize: 20
   }
})

export default CustomText