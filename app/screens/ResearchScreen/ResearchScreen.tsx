import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard, Pressable, Button, ScrollView, Dimensions } from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useAppSelector, useAppDispatch } from '../../redux/store'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import CustomText from '../../components/CustomText/CustomText'
import MySubCard from '../../components/MySubs/MySubCard'
import MySubs from '../../components/MySubs/MySubs';
import { filterUsers, resetUsers } from '../../redux/userTestSlice';
import ResearchResults from '../../components/ResearchResults/ResearchResults';
import { ResearchRoutesParams } from '../../navigation/ResearchNavigator/ResearchNavigator'
import routes from '../../navigation/routes';
import colors from '../../config/colors';
import { BlurView } from 'expo-blur';
import ResearchTrend from '../../components/ResearchTrend/ResearchTrend';
import TrendList from '../../components/TrendList/TrendList';

const dataSub = [
    {
        id: 1,
        name: 'Le F en personne',
        username: 'faridID',
        profilPicture: "https://randomuser.me/api/portraits/men/27.jpg",
        description: "Le cac préféré de ton cac préféré.",
        isCertified: true,
    },
    {
        id: 18,
        name: "David Lee",
        username: "davidlee",
        description: "Chef with a passion for creating innovative and delicious cuisine.",
        profilPicture: "https://randomuser.me/api/portraits/men/29.jpg",
        isCertified: true,
    },
    {
        id: 3,
        name: 'Yohan Feury',
        username: 'YohanLaPeuf',
        profilPicture: "https://randomuser.me/api/portraits/men/19.jpg",
        description: 'UHBuhbdezm ezfpizruhf frijh efzjhef ! ',
        isCertified: false,
    },
    {
        id: 4,
        name: 'Soufyane Tonkar',
        username: 'lePlusBoDuOuigo',
        profilPicture: "https://randomuser.me/api/portraits/men/13.jpg",
        description: 'UHBuhbdezm ezfpizruhf frijh efzjhef ! ',
        isCertified: true,
    },
]

const screenHeight =  Dimensions.get('window').height

const ResearchScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ResearchRoutesParams>>()
    const [textSearch, setTextSearch] = useState<string>('')
    const [focus, setFocus] = useState<boolean>(false)

    const users = useAppSelector((state) => state.users.usersArray)
    const theme = useAppSelector(state => state.context.theme)
    const dispatch = useAppDispatch()

    
    useEffect(() => {
        if (textSearch === '') {
            dispatch(resetUsers())
        } else {
            dispatch(filterUsers(textSearch))
        }
    }, [textSearch, dispatch])
    
    const onCancel = () => {
        Keyboard.dismiss()
        setTextSearch('')
        dispatch(resetUsers())
        setFocus(false)
    }
    const onFocus = () => {
        setFocus(true)
    }

   return (
      <View style={[styles.container, {backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background}]}>
        <View style={{flex: 1}}>
        <ScrollView>
        <View style={{height: 0.1*screenHeight}} />
            <View style={styles.header}>
                {focus &&
                <View style={{width:"80%"}}>
                <CustomInput 
                    placeholder='Rechercher un utilisateur' 
                    onChangeText={(e) => setTextSearch(e)} 
                    returnKeyType="search"
                    onSubmitEditing={onCancel}
                    width="90%"
                    value={textSearch}
                    autoFocus={focus}
                />
                </View>}
            </View>   
            <View style={{paddingTop: 10, paddingBottom: 80}}>
                {focus && textSearch.length > 0 &&
                <ResearchResults data={users} />}
                {!focus &&
                <MySubs title='Mes abonnements' data={dataSub} />}
                {!focus &&
                <TrendList data={users} />}
            </View>
        </ScrollView>
        <BlurView tint='dark' intensity={100} style={[StyleSheet.absoluteFill, styles.blurView]}>
            <Octicons 
                name="filter" 
                size={24} 
                color={theme === "dark" ? "white" : "black"} 
            />
            <CustomText style={{marginBottom: 5, color: colors.white}}>Recherche</CustomText>
            {!focus &&
            <Octicons 
                name="search" 
                size={24} 
                color={theme === "dark" ? "white" : "black"} 
                onPress={onFocus}
            />}
            {focus &&
            <Pressable onPress={onCancel}>
                <CustomText>Annuler</CustomText>
            </Pressable>
            }
        </BlurView>
        
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   blurView: {
    height: 0.11*screenHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 10, 
    },
    container: {
        flex: 1,
    },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
   }
})

export default ResearchScreen