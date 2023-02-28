import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { useAppSelector } from '../../redux/store'
import colors from '../../config/colors'
import CustomText from '../CustomText/CustomText'

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: any;
}

const CustomButton: React.FC<Props> = ({ title, onPress, style, textStyle, icon }) => {

  const theme = useAppSelector((state) => state.context.theme)

  return (
    <TouchableOpacity testID='button-container' 
      style={[styles.button, style, {borderColor: theme === "dark" ? '#CD7D11' : colors.light.primary}]} onPress={onPress}>
      <CustomText style={textStyle}>{title}</CustomText>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#CD7D11',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
});

export default CustomButton;
