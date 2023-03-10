import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { auth } from '../../../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


import { DrawerNavigatorParams } from '../../navigation/DrawerNavigator/DrawerNavigator';
import CustomText from '../CustomText/CustomText'
import colors from '../../config/colors';
import ActivityIndicator from '../Indicators/ActivityIndicator/ActivityIndicator';
import routes from '../../navigation/routes';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { switchTheme } from '../../redux/contextSlice/contextSlice';

const DrawerBody = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation<NativeStackNavigationProp<DrawerNavigatorParams>>()
    const theme = useAppSelector(state => state.context.theme)
    const dispatch = useAppDispatch()
    const onSignOut = () => {
        setLoading(true)
        signOut(auth)
        .then(() => setLoading(false))
        .catch(error => {
            setLoading(false)
             Alert.alert('Le problème suivant est survenu : ', error)
            })
    }

   return (
      <View style={styles.container}>
        <ActivityIndicator visible={loading} />
        <TouchableOpacity>
            <View style={styles.singleCell}>
                <MaterialCommunityIcons 
                    style={styles.marginIcon} 
                    name="account-outline" 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>Mon profil</CustomText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.singleCell}>
                <Ionicons 
                    style={styles.marginIcon} 
                    name="bookmarks-outline" 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>Signets</CustomText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity >
            <View style={styles.singleCell}>
                <MaterialIcons 
                    style={styles.marginIcon} 
                    name="favorite-outline" 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>Favoris</CustomText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(routes.WALLET)}>
            <View style={styles.singleCell}>
                <Ionicons 
                    style={styles.marginIcon} 
                    name="wallet-outline" 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>Portefeuille</CustomText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(routes.WALLET)}>
            <View style={styles.singleCell}>
                <MaterialCommunityIcons
                    style={styles.marginIcon} 
                    name="medal-outline" 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>Notation</CustomText>
            </View>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: colors.dark.primary, marginBottom: 25}}></View>
        <TouchableOpacity>
        <View style={styles.singleCell}>
            <Ionicons 
                style={styles.marginIcon} 
                name="settings-outline" 
                size={24} 
                color={theme === 'dark' ? "white" : "black"} />
            <CustomText>Paramètres</CustomText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(switchTheme())}>
            <View style={styles.singleCell}>
                <Ionicons 
                    style={styles.marginIcon} 
                    name={theme === 'dark' ? 'sunny-outline' : "moon"} 
                    size={24} 
                    color={theme === 'dark' ? "white" : "black"} />
                <CustomText>{theme === 'dark' ? "Light mode" : "Dark mode"}</CustomText>
            </View>
        </TouchableOpacity>
        <View style={[styles.singleCell, styles.logOut]}>
            <AntDesign 
                style={styles.marginIcon} 
                name="logout" 
                size={24} 
                color={theme === 'dark' ? "white" : "black"} 
                onPress={onSignOut} />
            <CustomText>Déconnexion</CustomText>
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    marginTop: 30,
    flex: 1
   },
   singleCell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 37
   },
   marginIcon: {
    marginRight: 10
   },
   logOut: {
    position: "absolute",
    bottom: "5%",
    left: "2%"
   }
})

export default DrawerBody