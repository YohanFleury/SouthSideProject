import React, {useMemo, useCallback, useState} from 'react'
import { View, StyleSheet, Pressable, TouchableHighlight, Button, TouchableNativeFeedback } from 'react-native'
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdropProps, BottomSheetBackdrop, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import { FontAwesome5} from '@expo/vector-icons';

import colors from '../../../config/colors';
import CustomText from '../../CustomText/CustomText';
import { Portal } from '@gorhom/portal';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';



interface TipsModalProps {
    unlockModalRef: any
}


const UnlockModal: React.FC<TipsModalProps> = ({ unlockModalRef }) => {

    const [tipValue, setTipValue] = useState<string>("")
    const [tipMessage, setTipMessage] = useState<string>("")
    const [index, setIndex] = useState(-1)

    const snapPoints = useMemo(() => ['50%', '93%'], []);
    const renderBackdrop = useCallback(
        (props_: BottomSheetBackdropProps) => (
          <BottomSheetBackdrop
            {...props_}
            pressBehavior="close"
            opacity={1.5}
            disappearsOnIndex={-1}
          />
        ),
        []
      );

      const handleDismiss = () => {
        setTipMessage('')
        setTipValue('')
      }
   return (
    <Portal>
    <BottomSheetModalProvider>
        <BottomSheetModal
        
        ref={unlockModalRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        backgroundStyle={{
            backgroundColor: colors.dark.background, 
            borderRadius: 20,
            borderTopColor: colors.lightGrey,
            borderLeftColor: colors.lightGrey,
            borderRightColor: colors.lightGrey,
            borderWidth: 0.5 
        }}
        handleIndicatorStyle={{backgroundColor: 'grey'}}
        onDismiss={handleDismiss}
        onChange={e => setIndex(e)}
        >
            <View style={styles.contentContainer}>
                <View style={styles.container}>
                <View style={styles.header}>
                    <CustomText style={{fontSize: 21}}>Contenu exclusif</CustomText>
                    <FontAwesome5 name="lock" size={25} color={colors.white} />
                </View>
                <Divider />
                <View style={styles.subscribe}>
                    <CustomText style={styles.text}>S'abonner à l'auteur</CustomText>
                    <CustomButton title="S'abonner" onPress={() => null} />
                </View>
                <View style={styles.subscribe}>
                    <CustomText style={styles.text}>Déverrouiller pour 5$</CustomText>
                    <Button color={colors.dark.primary} title='Déverrouiller' onPress={() => null} />
                </View>
                </View>
            </View>
        </BottomSheetModal>
     </BottomSheetModalProvider>
     </Portal>
   )
}

const styles = StyleSheet.create({
   cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
   },
   container: {
    height: '30%',
    justifyContent: 'space-evenly'
   },
   contentContainer: {
    backgroundColor: colors.dark.background,
    flex: 1,
    padding: 10,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: "70%",
    alignSelf: 'center'
   },
   littleCard: {
    width: 80,
    height: 75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.dark.primary
   },
   text: {
    fontSize: 19,
    marginTop: 5
   },
   subscribe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
   }
 })

export default UnlockModal