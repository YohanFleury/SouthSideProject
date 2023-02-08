import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  returnKeyType?: 'next' | 'done';
  onSubmitEditing?: () => void;
}

const CustomInput: React.FC<Props> = ({ value, onChangeText, placeholder, returnKeyType, onSubmitEditing }) => {
  const inputRef = useRef<TextInput>(null);


  return (
    <KeyboardAvoidingView behavior='padding' testID='keyboard-avoiding-view' >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID='dismiss-keyboard'>
        <View style={styles.container}>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            style={styles.input}
            testID='input'
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default CustomInput;