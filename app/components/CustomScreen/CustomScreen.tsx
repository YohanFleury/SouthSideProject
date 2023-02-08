import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { useAppDispatch, useAppSelector } from '../../redux/store'
import colors from '../../config/colors'

interface Props {
  children: React.ReactNode;
}


const CustomScreen: React.FC<Props> = ({ children }) => {

  const theme = useAppSelector((state) => state.context.theme)
  return (
    <SafeAreaView style={[styles.container, { paddingTop: Constants.statusBarHeight, backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background}]}>
      <View style={[styles.container, {backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background}]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomScreen;
