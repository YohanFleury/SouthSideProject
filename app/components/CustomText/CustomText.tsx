import React from 'react'
import { Text, StyleSheet, TextStyle } from 'react-native'

import { useAppSelector } from '../../redux/store'
import colors from '../../config/colors'


type TextProp = {
    children: string | number,
    style?: TextStyle,
}

const CustomText:React.FC<TextProp> = ({children, style}) => {

    const theme = useAppSelector((state) => state.context.theme)

   return (
      <Text style={[styles.police, {color: theme === "dark" ? colors.dark.texte : colors.light.texte}, style]}>{children}</Text>
   )
}

const styles = StyleSheet.create({
   police: {
    fontSize: 19
   }
})

export default CustomText