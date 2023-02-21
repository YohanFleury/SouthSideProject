import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import CustomButton from '../CustomButton/CustomButton';
import colors from '../../config/colors';


interface ParamsModalProps {
    visible?: boolean;
    onClose?: () => void;
    onPress?: () => void;
} 

const ParamsModal: React.FC<ParamsModalProps> = ({ visible, onClose, onPress }) => {

   // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{backgroundColor: colors.dark.background,}}
          handleIndicatorStyle={{backgroundColor: 'white'}}
          
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
  );
};

const styles = StyleSheet.create({
  containerBsm: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.dark.background
  },
});

export default ParamsModal
