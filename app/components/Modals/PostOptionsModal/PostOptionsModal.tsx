import React, {useMemo, useCallback, useState} from 'react'
import { View, StyleSheet, Pressable, TouchableHighlight, Button, TouchableNativeFeedback } from 'react-native'
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdropProps, BottomSheetBackdrop, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';
import { useAppSelector } from '../../../redux/store';
import { Portal } from '@gorhom/portal';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../../../config/colors';
import CustomText from '../../CustomText/CustomText';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';



interface TipsModalProps {
    tipsModalRef: any
}


const PostOptionsModal: React.FC<TipsModalProps> = ({ tipsModalRef }) => {
    const theme = useAppSelector(state => state.context.theme)

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
                backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background, 
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
            <View style={[
                styles.contentContainer, 
                {backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background}
                ]}>
                <View style={styles.cardContainer}>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                        <AntDesign name="sharealt" size={27} color={theme === 'dark' ? "white" : "black"}  />
                        <CustomText style={styles.text}>Partager</CustomText>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                        <Ionicons name="bookmarks-outline" size={24} color={theme === 'dark' ? "white" : "black"}  />
                        <CustomText style={styles.text}>Enregistrer</CustomText>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.littleCard}>
                       <FontAwesome name="star-o" size={27} color={theme === 'dark' ? "white" : "black"}  />
                       <CustomText style={styles.text}>Favoris</CustomText>
                    </TouchableWithoutFeedback>
                </View>     
                <View style={[styles.cardContainer, {marginTop: 35}]}>
                    <View style={styles.littleCard}>
                        <Entypo name="link" size={27} color={theme === 'dark' ? "white" : "black"}  />
                        <CustomText style={styles.text}>Lien</CustomText>
                    </View>
                    <View style={styles.littleCard}>
                        <Ionicons name="eye-off" size={27} color={theme === 'dark' ? "white" : "black"}  />
                        <CustomText style={styles.text}>Masquer</CustomText>
                    </View>
                    <View style={styles.littleCard}>
                        <Ionicons name="warning-outline" size={27} color={theme === 'dark' ? "white" : "black"}  />
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