import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

import { useAppSelector } from '../../redux/store'
import colors from '../../config/colors'
import CustomText from '../CustomText/CustomText'

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const CustomButton: React.FC<Props> = ({ title, onPress, style }) => {

  const theme = useAppSelector((state) => state.context.theme)

  return (
    <TouchableOpacity testID='button-container' 
      style={[styles.button, style, {borderColor: theme === "dark" ? colors.dark.primary : colors.light.primary}]} onPress={onPress}>
      <CustomText>{title}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
});

export default CustomButton;
