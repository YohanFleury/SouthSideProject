import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const CustomButton: React.FC<Props> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity testID='button-container' style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
