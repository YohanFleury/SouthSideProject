import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInputProps } from 'react-native';
import colors from '../../config/colors';
import { useAppSelector } from '../../redux/store'

interface Props {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  returnKeyType?: 'next' | 'done' | 'search';
  onSubmitEditing?: () => void;
  onFocus?:() => void;
  width?: string | number;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<Props> = ({ 
  value, 
  onChangeText, 
  placeholder, 
  returnKeyType, 
  onSubmitEditing, 
  onFocus, 
  onBlur,
  secureTextEntry,
  width = "70%",
}) => {
  const inputRef = useRef<TextInput>(null);

  const theme = useAppSelector((state) => state.context.theme)


  return (
    <KeyboardAvoidingView behavior='padding' testID='keyboard-avoiding-view' >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID='dismiss-keyboard'>
        <View style={styles.container}>
          <TextInput
            ref={inputRef}
            onFocus={onFocus}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            style={
              [styles.input, {borderColor: theme ==="dark" ? colors.dark.primary : colors.light.primary, width: width, }]
            }
            testID='input'
            placeholderTextColor={theme ==="dark" ? colors.lightGrey : colors.light.texte}
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
    height: 50,
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default CustomInput;