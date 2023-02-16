import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Keyboard, Pressable, Button } from 'react-native'
import { Octicons } from '@expo/vector-icons';
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



const ResearchScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ResearchRoutesParams>>()
    const [textSearch, setTextSearch] = useState<string>('')
    const [focus, setFocus] = useState<boolean>(false)

    const users = useAppSelector((state) => state.users.usersArray)
    const dispatch = useAppDispatch()

    
    useEffect(() => {
        if (textSearch === '') {
            dispatch(resetUsers())
        } else {
            dispatch(filterUsers(textSearch))
        }
    }, [textSearch, dispatch])
    
    const onCancel = () => {
        setTextSearch('')
        dispatch(resetUsers())
        setFocus(false)
        Keyboard.dismiss()
    }

   return (
      <CustomScreen>
        <View style={styles.header}>
            <View style={{width:"80%"}}>
            <CustomInput 
                placeholder='Rechercher un utilisateur' 
                onChangeText={(e) => setTextSearch(e)} 
                returnKeyType="search"
                onSubmitEditing={onCancel}
                width="90%"
                value={textSearch}
                onFocus={() => setFocus(true)}
            />
            </View>
            {focus &&
            <Pressable onPress={onCancel}>
                <CustomText>Annuler</CustomText>
            </Pressable>}
            {!focus &&
            <Octicons name="filter" size={24} color="white" />
            }
        </View>   
        {focus && textSearch.length > 0 &&
        <ResearchResults data={users} />}
        {!focus &&
        <MySubs title='Mes abonnements' data={dataSub} />}
        {!focus &&
        <MySubs title='Cela pourrait vous intéresser' data={users} />}
      </CustomScreen>
   )
}

const styles = StyleSheet.create({
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between'
   }
})

export default ResearchScreen