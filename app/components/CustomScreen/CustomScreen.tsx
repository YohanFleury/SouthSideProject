import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

interface Props {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomScreen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container, { paddingTop: Constants.statusBarHeight }]}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default CustomScreen;
