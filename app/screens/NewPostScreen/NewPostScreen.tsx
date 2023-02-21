import React, {useEffect, useRef, useState, useMemo, useCallback, useLayoutEffect} from 'react'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { View, StyleSheet, Text, Switch, FlatList, Button, TextInput, KeyboardAvoidingView, Pressable, Platform, TouchableWithoutFeedback, Keyboard, Image, Modal} from 'react-native'
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import { BlurView } from 'expo-blur';
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';


import colors from '../../config/colors'
import CustomScreen from '../../components/CustomScreen/CustomScreen';
import CustomButton from '../../components/CustomButton/CustomButton';
import ProfilPicture from '../../components/ProfilPicture/ProfilPicture';
import CustomText from '../../components/CustomText/CustomText';
import { addImagesPost, deleteImageUri, resetImagesUris, setOpenNewPostModal } from '../../redux/userTestSlice';
import ParamsModal from '../../components/ParamsModal/ParamsModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import routes from '../../navigation/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeNavigatorParams } from '../../navigation/HomeNavigator/HomeNavigator';

const NewPostScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<HomeNavigatorParams>>()
    const navigationState = useNavigationState(state => state)
    console.log(navigationState)
    const dispatch = useAppDispatch()
    const imagesSelected = useAppSelector((state) => state.users.imagesPost)
    const visible = useAppSelector((state) => state.users.openNewPostModal)

    const [inputValue, setInputValue] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [paramsModalVisible, setParamsModalVisible] = useState<boolean>()
    const [isPrivate, setIsPrivate] = useState<boolean>(false)

    useEffect(() => {
      dispatch(resetImagesUris())
    }, []) 
    
    useLayoutEffect(() => {
        
        setParamsModalVisible(true)
    }, [])
    

    const onSelectImage = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsMultipleSelection: true,
                selectionLimit: 3-imagesSelected.length,
                quality: 1,
                videoQuality: 1,
            })
            if (!result.canceled) {
                result.assets.map(image => dispatch(addImagesPost({
                    assetId: image.assetId,
                    uri: image.uri
                })))
            }
        } catch (error) {
            console.log('error selected image',error)
        }
    }
    const onTakePhoto = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) alert('Autorise wesh panique pas!')
        try {
            const result = await ImagePicker.launchCameraAsync()
            if (!result.canceled) {
                result.assets.map(image => dispatch(addImagesPost({
                    assetId: image.assetId,
                    uri: image.uri
                })))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePost = () => {
        console.log('Post : ', {
            text: inputValue,
            images: imagesSelected
        })
        setOpenModal(false)
    }

    const inputRef = useRef<TextInput>(null);

    const handleMomo = () => {
        Keyboard.dismiss()
        handlePresentModalPress()
        setParamsModalVisible(true)
    }
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
      }, []);
    
   return (
    <View style={{flex: 1, backgroundColor: colors.dark.background}}>
        <Modal
        animationType='slide'
        visible={visible}
        >
            <CustomScreen drawerStyle={{padding: 0}}>
            <KeyboardAvoidingView style={{flex: 1, padding: 15, backgroundColor: paramsModalVisible ? '#17172E' : 'transparent'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback  style={{flex: 1}} onPress={() =>{ 
                    bottomSheetModalRef.current?.dismiss()
                    inputRef.current?.focus()
                    setParamsModalVisible(false)
                    }} >
                    <View style={{justifyContent: 'space-between', flex: 0.9, padding: 5,}}> 
                        <View style={{ flex: 0.5, }}>
                            <View style={styles.header}>
                                <Button title='Annuler' onPress={() => {
                                    dispatch(setOpenNewPostModal(false))
                                    navigation.navigate(routes.HOME)
                                    }} color={colors.white} />
                                {inputValue.length > 0 &&
                                <Button 
                                color={colors.white} 
                                title='Poster' 
                                onPress={() => console.log('POST')}  />}
                            </View>
                            <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={styles.user}>
                                    <ProfilPicture size={40} onPress={() => console.log('first')} source='https://randomuser.me/api/portraits/men/2.jpg' />
                                </View>
                                <CustomButton 
                                    title={isPrivate ? 'Privé' : 'Public' }
                                    onPress={handleMomo} 
                                    textStyle={{fontSize: 15}} 
                                    style={{borderRadius: 15, height: 36, flexDirection: 'row', alignItems:'center', width: 90, justifyContent: 'space-evenly'}} 
                                    icon={<AntDesign name="down" size={16} color="white" />} />
                            </View>
                            <View style={styles.textArea}>
                                <TextInput 
                                    ref={inputRef}
                                    style={styles.input}
                                    placeholder='Exprime toi !'
                                    placeholderTextColor={colors.medium}
                                    numberOfLines={10}
                                    multiline
                                    autoFocus
                                    onChangeText={e => setInputValue(e)}
                                    onFocus={() => {
                                        bottomSheetModalRef.current?.dismiss()
                                        setParamsModalVisible(false)
                                    }}
                                    />
                            </View>
                        </View>
                        <View style={styles.picturesIcons}>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                                {imagesSelected.length < 3 &&
                                <>
                                    <FontAwesome onPress={onSelectImage} style={{marginRight: 15}} name="photo" size={30} color={colors.white} />
                                    <MaterialIcons onPress={onTakePhoto} name="photo-camera" size={35} color={colors.white} />
                                </>
                                }
                                {imagesSelected.length === 3 &&
                                <>
                                    <FontAwesome name="photo" style={{marginRight: 15}} size={30} color={colors.medium} />
                                    <MaterialIcons name="photo-camera" size={35} color={colors.medium} />
                                </>
                                }
                            </View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{width: '50%',}}
                                data={imagesSelected}
                                keyExtractor={image => image.assetId}
                                renderItem={({ item }) => {
                                    return (
                                        <View key={item.assetId}>  
                                        <TouchableWithoutFeedback onPress={() => dispatch(deleteImageUri(item.uri))}>
                                            <View style={styles.pastille}>
                                                <AntDesign name="close" size={12} color={colors.white} />
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <Image source={{uri: item.uri}} style={{width: 80, height: 80, borderRadius: 15, margin: 5, marginRight: 10}} />
                                    </View>
                                )}}
                                />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
                <BottomSheetModalProvider>
            <View>
                <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={{
                    backgroundColor: colors.dark.background, 
                    borderRadius: 35
                }}
                handleIndicatorStyle={{backgroundColor: 'grey'}}
                onDismiss={() => inputRef.current?.focus()}
                >
                    <View style={styles.contentContainer}>
                        <CustomText>Choisissez une audience</CustomText>
                        <View style={{width: '100%'}}>
                            <Pressable onPress={() => setIsPrivate(false)} style={styles.audience}>
                                <View style={styles.audienceIcon}>
                                    <Ionicons name="earth" size={26} color="white" />
                                </View>
                                <CustomText>Public</CustomText>
                                {!isPrivate &&
                                <View style={styles.checked}>
                                    <Ionicons name="checkmark-circle" size={25} color="#16CF64" />
                                </View>}
                            </Pressable>
                            <Pressable onPress={() => setIsPrivate(true)} style={styles.audience}>
                                <View style={[styles.audienceIcon, {backgroundColor: '#16CF64'}]}>
                                    <Entypo name="lock" size={26} color="white" />
                                </View>
                                <CustomText>Privé (mes abonnés)</CustomText>
                                {isPrivate &&
                                <View style={styles.checked}>
                                    <Ionicons name="checkmark-circle" size={25} color="#16CF64" />
                                </View>}
                            </Pressable>
                        </View>
                    </View>
                </BottomSheetModal>
            </View>
            </BottomSheetModalProvider>
        </CustomScreen>
    </Modal>
    </View>
   )
}

const styles = StyleSheet.create({
   audiance: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
   },
   container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   input: {
    fontSize: 20,
    color: colors.white,
   },
   textArea: {
    height: '115%'
   },
   pastille: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: 'black',
    opacity: 0.6,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.dark.primary,
    borderWidth: 2
   },
   picturesIcons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
   },
   user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 15,
    overflow: "hidden",
    
   },
   containerBsm: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.dark.background,
    padding: 5
  },
  audience: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    margin: 15,
    marginTop: 30,
  },
  audienceIcon: {
    width: 58, 
    height: 58,
    backgroundColor: '#1616CF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20
  },
  checked: {
    width: 24,
    height: 24,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -8,
    left: 38,
    backgroundColor: colors.dark.background
  }
})

export default NewPostScreen