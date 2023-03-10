import React from 'react';
import { View, SafeAreaView, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { useAppDispatch, useAppSelector } from '../../redux/store'
import colors from '../../config/colors'

interface Props {
  children: React.ReactNode;
  drawerStyle?: ViewStyle;
  screenStyle?: ViewStyle;
}


const CustomScreen: React.FC<Props> = ({ children, drawerStyle, screenStyle }) => {

  const theme = useAppSelector((state) => state.context.theme)
  return (
    <SafeAreaView style={[styles.container, { paddingTop: Constants.statusBarHeight, backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background, }, screenStyle]}>
      <StatusBar barStyle={'light-content'} />
      <View style={
        [
          styles.container,
          {backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background},
          drawerStyle
        ]}>
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
