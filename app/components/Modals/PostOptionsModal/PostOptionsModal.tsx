import React, {useMemo, useCallback, useState} from 'react'
import { View, StyleSheet, Pressable, TouchableHighlight, Button, TouchableNativeFeedback } from 'react-native'
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdropProps, BottomSheetBackdrop, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';

import colors from '../../../config/colors';
import CustomText from '../../CustomText/CustomText';
import { Portal } from '@gorhom/portal';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



interface TipsModalProps {
    tipsModalRef: any
}


const PostOptionsModal: React.FC<TipsModalProps> = ({ tipsModalRef }) => {

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
                <View style={styles.cardContainer}>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                        <AntDesign name="sharealt" size={27} color="white" />
                        <CustomText style={styles.text}>Partager</CustomText>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                        <Ionicons name="bookmarks-outline" size={24} color="white" />
                        <CustomText style={styles.text}>Enregistrer</CustomText>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                       <FontAwesome name="star-o" size={27} color="white" />
                       <CustomText style={styles.text}>Favoris</CustomText>
                    </TouchableWithoutFeedback>
                </View>     
                <View style={[styles.cardContainer, {marginTop: 35}]}>
                    <View style={styles.littleCard}>
                        <Entypo name="link" size={27} color="white" />
                        <CustomText style={styles.text}>Lien</CustomText>
                    </View>
                    <View style={styles.littleCard}>
                        <Ionicons name="eye-off" size={27} color="white" />
                        <CustomText style={styles.text}>Masquer</CustomText>
                    </View>
                    <View style={styles.littleCard}>
                        <Ionicons name="warning-outline" size={27} color="white" />
                        <CustomText style={styles.text}>Signaler</CustomText>
                    </View>
                </View> 
                <View style={[styles.cardContainer, {marginTop: 35}]}>
                    <View style={styles.littleCard}>
                        <AntDesign name="delete" size={27} color={colors.danger} />
                        <CustomText style={styles.text}>Supprimer</CustomText>
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

   contentContainer: {
     flex: 1,
     backgroundColor: colors.dark.background,
     padding: 10,
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
    fontSize: 12,
    marginTop: 5
   }
 })

export default PostOptionsModal