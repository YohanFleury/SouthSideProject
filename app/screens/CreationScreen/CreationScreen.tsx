import { BlurView } from 'expo-blur'
import React from 'react'
import { View, StyleSheet, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAppDispatch } from '../../redux/store';
import { setOpenNewPostModal } from '../../redux/userTestSlice';
import { useNavigation, } from '@react-navigation/native';


import CustomScreen from '../../components/CustomScreen/CustomScreen'
import CustomText from '../../components/CustomText/CustomText'
import colors from '../../config/colors'
import NewPostScreen from '../NewPostScreen/NewPostScreen';
import { CreationNavigatorParams } from '../../navigation/CreationNavigator/CreationNavigator';
import routes from '../../navigation/routes';

const CreationScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<CreationNavigatorParams>>()

   return (
      <CustomScreen>
        <ImageBackground style={{flex: 1}} source={require('../../assets/backgroundCrea.png')}>
            <NewPostScreen />
            <View style={styles.container}>
                <TouchableOpacity style={{width: '75%'}} onPress={() => dispatch(setOpenNewPostModal(true))}>
                    <BlurView style={styles.blurChoice} tint='dark' intensity={60}>
                        <Ionicons name="create" style={styles.icons} size={30} color={colors.white} />
                        <CustomText style={styles.text}>PUBLICATION</CustomText>
                    </BlurView>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '75%'}}>
                    <BlurView style={styles.blurChoice} tint='dark' intensity={60}>
                        <Octicons name="device-camera-video" style={styles.icons} size={30} color={colors.white} />
                        <CustomText style={styles.text}>LIVE</CustomText>
                    </BlurView>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '75%'}} onPress={() => navigation.navigate(routes.SURVEY)}>
                    <BlurView style={styles.blurChoice} tint='dark' intensity={60}>
                        <MaterialIcons name="groups" style={styles.icons} size={32} color={colors.white} /> 
                        <CustomText style={styles.text}>SONDAGE</CustomText>
                    </BlurView>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </CustomScreen>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 20,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
   },
   blurChoice: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    margin: 15,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 0.8,
    borderColor: colors.dark.primary
   },
   icons: {
    marginRight: 15
   },
   image: {
    width: 35,
    height: 40,
    marginRight: 15
   },
   text: {
    color: colors.white,
    fontSize: 21,
   },
})

export default CreationScreen