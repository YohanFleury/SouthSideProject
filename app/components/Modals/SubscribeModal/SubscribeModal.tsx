import { View, StyleSheet, TouchableNativeFeedback, ActivityIndicator, Dimensions } from 'react-native'
import React, {useMemo, useCallback, useState} from 'react'
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal, BottomSheetBackdropProps, BottomSheetBackdrop, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, Feather} from '@expo/vector-icons';

import colors from '../../../config/colors';
import CustomText from '../../CustomText/CustomText';
import { Portal } from '@gorhom/portal';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
import ProfilPicture from '../../ProfilPicture/ProfilPicture';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import SuccessIndicator from '../../Indicators/SuccessIndicator/SuccessIndicator';
import { useAppDispatch } from '../../../redux/store';
import { setIsSub } from '../../../redux/userTestSlice';



interface SubscribeModalProps {
    subscribeModalRef: any;
    source: any,
    name: string;
    username: string;
}

const screenWidth = Dimensions.get('window').width

const SubscribeModal: React.FC<SubscribeModalProps> = ({ subscribeModalRef, source, name, username }) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const labelPrivileges = [
        'Accès à toutes les publications privées', 
        'Echanger des messages directs', 
        'Contenu exclusif par message direct', 
        'Accès à tous les lives']

    const snapPoints = useMemo(() => ['94%'], []);
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



      const handlePress = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowSuccess(true)
        }, 3000);
      }
      const onDone = () => {
        setTimeout(() => {
            dispatch(setIsSub(true))
            setShowSuccess(false)
            subscribeModalRef.current?.close()
        }, 1500);
      }
      
      const handleDismiss = () => {
      }

   return (
    <Portal>
    <BottomSheetModalProvider>
        {showSuccess && <SuccessIndicator visible={showSuccess} onDone={onDone} />}
        <BottomSheetModal
        ref={subscribeModalRef}
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
        >
            <View style={styles.contentContainer}>
                <ProfilPicture size={80} source={source} />
                <View style={styles.verified}>
                                <CustomText style={styles.accountName}>
                                    {name}
                                </CustomText>
                                <Feather name="check-circle" size={18} color="white" />
                            </View>
                            <CustomText style={styles.userName}>
                                {`@${username}`}                    
                            </CustomText>
                <View style={styles.container}>
                   <View style={styles.privileges}>
                    {
                        labelPrivileges.map((label, index) => (
                        <View key={index}>
                            <View style={styles.tableLine}>
                                <CustomText style={{fontSize: 17}}>{label}</CustomText>
                                <Ionicons name="shield-checkmark-sharp" size={24} color="green" />
                            </View>
                            {index < 3 &&
                            <Divider width={0.5} color={colors.medium} style={{width: '50%'}} />}
                        </View>
                        ))
                    }
                   </View>
                   
                   <View style={styles.btnView}>
                    <TouchableNativeFeedback onPress={handlePress} style={{flex: 1}}>
                        <View style={styles.btn}>
                            <CustomText style={styles.labelBtn}>Abonnement 1 mois</CustomText>
                            {!loading && <CustomText style={styles.price}>19,99$</CustomText>}
                            {loading && <ActivityIndicator color={'white'} />}
                        </View>
                    </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={handlePress} style={{flex: 1}}>
                            <View style={[styles.btn, {backgroundColor: '#0258A4', marginTop: 20}]}>
                                <CustomText style={styles.labelBtn}>Abonnement 2 mois</CustomText>
                                <CustomText style={styles.price}>34,99$</CustomText>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={handlePress} style={{flex: 1}}>
                            <View style={[styles.btn, {backgroundColor: '#1D3B56', marginTop: 20}]}>
                                <CustomText style={styles.labelBtn}>Abonnement 3 mois</CustomText>
                                <CustomText style={styles.price}>49,99$</CustomText>
                            </View>
                        </TouchableNativeFeedback>
                   </View>
                </View>
            </View>
        </BottomSheetModal>
     </BottomSheetModalProvider>
     </Portal>
   )
}

const styles = StyleSheet.create({
    accountName: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginRight: 5,
        marginBottom: 0
    },
   btn: {
    width: "90%",
    backgroundColor: "#CD7D11",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 25
   }, 
   btnView: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center'
   },
   container: {
    flex: 1,
    marginTop: 5,
    padding: 20,
    width: screenWidth
   },
   contentContainer: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: colors.dark.background,
    
   },
   labelBtn: {
    fontSize: 19,
    fontWeight: 'bold'
   },
   moreSub: {
    marginTop: 10,
    padding: 15,
   },
   price: {
    fontSize: 16
   },
   privileges: {
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: colors.dark.primary,
    borderRadius: 20
   },
   tableLine: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
   },
   verified: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5
    },
   userName: {
    fontSize: 15,
    color: colors.medium,
    marginVertical: 5
    },
 })

export default SubscribeModal