import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Dimensions } from 'react-native';
import CustomScreen from '../../components/CustomScreen/CustomScreen';
import CustomText from '../../components/CustomText/CustomText';
import { createDrawerNavigator, useDrawerStatus, useDrawerProgress} from '@react-navigation/drawer'
import colors from '../../config/colors';
import Animated from 'react-native-reanimated';
import NewPostScreen from '../NewPostScreen/NewPostScreen';
import ParamsModal from '../../components/ParamsModal/ParamsModal';
import BottomSheet, { BottomSheetView, BottomSheetModal, useBottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const HomeScreen = () => {

  return (
      <CustomScreen>
        
        <CustomText>Home !</CustomText>
        <NewPostScreen />

      </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.1
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 15,
    overflow: "hidden"
   },
});

export default HomeScreen;
