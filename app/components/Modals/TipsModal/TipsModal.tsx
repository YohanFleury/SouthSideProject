import React, {useMemo, useCallback, useState} from 'react'
import { View, StyleSheet, Pressable, TouchableHighlight } from 'react-native'
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdropProps, BottomSheetBackdrop, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';

import colors from '../../../config/colors';
import CustomText from '../../CustomText/CustomText';
import { Portal } from '@gorhom/portal';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';



interface TipsModalProps {
    tipsModalRef: any
}


const TipsModal: React.FC<TipsModalProps> = ({ tipsModalRef }) => {

    const [tipValue, setTipValue] = useState<string>("")
    const [tipMessage, setTipMessage] = useState<string>("")
    const [index, setIndex] = useState(-1)

    const snapPoints = useMemo(() => ['50%', '95%'], []);
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
        ref={tipsModalRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        backgroundStyle={{
            backgroundColor: colors.dark.background, 
            borderRadius: 35,
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
                <CustomText style={{marginTop: 10}}>Laisser un pourboire</CustomText>
                <View style={styles.container}>
                    <View>
                        <CustomInput 
                            value={tipValue}
                            placeholder="Entrez un montant"
                            onChangeText={e => setTipValue(e)}
                        />
                        <View style={styles.pricesContainer}>
                            <TouchableHighlight onPress={() => setTipValue('5')} style={styles.circle}>
                            <CustomText style={styles.prices}>5$</CustomText>
                            </TouchableHighlight> 
                            <TouchableHighlight onPress={() => setTipValue('10')} style={styles.circle}>
                            <CustomText style={styles.prices}>10$</CustomText>
                            </TouchableHighlight> 
                            <TouchableHighlight onPress={() => setTipValue('20')} style={styles.circle}>
                            <CustomText style={styles.prices}>20$</CustomText>
                            </TouchableHighlight> 
                            <TouchableHighlight onPress={() => setTipValue('50')} style={styles.circle}>
                            <CustomText style={styles.prices}>50$</CustomText>
                            </TouchableHighlight> 
                            <TouchableHighlight onPress={() => setTipValue('100')} style={styles.circle}>
                            <CustomText style={styles.prices}>100$</CustomText>
                            </TouchableHighlight> 
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <CustomInput
                        placeholder='Message (facultatif)'
                        value={tipMessage}
                        onChangeText={e => setTipMessage(e)}
                        onFocus={() => console.log('coucou')}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <CustomButton title='Envoyer' onPress={() => tipsModalRef.current?.close()} style={styles.btn} />
                    </View>
                </View>
            </View>
        </BottomSheetModal>
     </BottomSheetModalProvider>
     </Portal>
   )
}

const styles = StyleSheet.create({
   btn: {
    width: 150,
   }, 
   btnContainer: {
    marginTop: 15,
    alignItems: 'center'
   },
   container: {
    width: '100%',
    height: '45%',
    justifyContent: 'space-evenly', 
   },
   contentContainer: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: colors.dark.background,
     padding: 15,
   },
   circle: {
    borderWidth: 0.5,
    borderColor: colors.dark.primary,
    borderRadius: 20,
    padding: 10
   },
   inputContainer: {
    marginTop: 15,
   },
   prices: {
    fontSize: 17
   },
   pricesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    
   }
 })

export default TipsModal