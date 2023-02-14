import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView,  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import ProfilPicture from '../../components/ProfilPicture/ProfilPicture';
import CoverPicture from '../../components/CoverPicture/CoverPicture';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomText from '../../components/CustomText/CustomText';
import colors from '../../config/colors';
import CustomScreen from '../../components/CustomScreen/CustomScreen' 
import BackButton from '../../components/BackButton/BackButton';
import PostCard from '../../components/PostCard/PostCard';

const description = "Demain le psg affonte l'om. Veratti est la pierre angulare du jeu parisien on espere tous qu'il sera present demain avec la team !"


const ProfilScreen = () => {
    
    return (
        <CustomScreen>
        <View style={styles.BackButton}>
            <BackButton />
        </View>
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.test}>
                    <CoverPicture source={require('../../assets/psg.jpg')} />
                    <View style={[styles.ppContainer, {width: 80+10, height: 80+10, borderRadius: (80+10)/2}]}>
                        <ProfilPicture onPress={() => console.log('pp')} size={80} source={require('../../assets/verratti.png')} />
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                        <View style={{width: '80%'}}>
                            <View style={styles.verified}>
                                <CustomText style={styles.accountName}>
                                    Maxime Neymar
                                </CustomText>
                                <Feather name="check-circle" size={18} color="white" />
                            </View>
                            <CustomText style={styles.userName}>
                                @max_psg                    
                            </CustomText>
                            <CustomText style={styles.bio}>
                                Investisseur cryptos, ici on fait gagner sale !
                                Satisfait ou remboursé direct garçon
                            </CustomText>
                        </View>
                        <View style={styles.iconsActions}>
                            <AntDesign name="adduser" size={21} color={colors.dark.primary} />
                            <MaterialCommunityIcons name="email-send-outline" size={21} color={colors.dark.primary} />
                            <Fontisto name="bell" size={21} color={colors.dark.primary} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{padding: 15, alignItems: 'center'}}>
                <CustomButton title="Subscribe" onPress={() => console.log("S'abonner")} style={{width: "60%"}} />
            </View>
            <Divider width={2} color={colors.lightGrey} />
            <View style={styles.secondContainer}>
                <View style={styles.buttonsContainer}>
                    <Button title="Posts" color={colors.dark.primary} onPress={() => null} />
                    <View style={{ width: 1, height: '30%', backgroundColor: colors.lightGrey}} />
                    <Button title="Medias" color={colors.medium} onPress={() => console.log('Photo button pressed')} />
                    <View style={{ width: 1, height: '30%', backgroundColor: colors.lightGrey}} />
                    <Button title="Lives" color={colors.medium} onPress={() => null} />
                </View>
                <View style={{width: '90%', alignSelf: 'center', marginTop: 8}}>
                    <Divider />
                </View>
            </View>
            <PostCard blurred={true} description={description} />
            <PostCard blurred={false} description={description} />
            <PostCard blurred description={description} />
            <PostCard blurred={false} description={description} />
            <PostCard blurred={false} description={description} />
            <PostCard blurred={false} description={description} />
        </ScrollView>
    </CustomScreen>
)
}
const styles = StyleSheet.create({
    accountName: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginRight: 5,
        marginBottom: 5
    },
    bio: {
        marginTop: 15,
        fontSize: 16
    },
    
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


    container2: {
        padding: 10,
        marginTop: 10
    },
    
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    
    followers: {
        padding: 10,
        flexDirection: 'row',
    },

    BackButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },

    iconsActions: {
        padding: 10,
        marginTop: "-15%",
        marginRight: "-3%",
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
        
    },

    mainContainer: {
        padding: 2
    },
    secondContainer: {
        padding: 5
    },
    test: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginBottom: -50
    },
    ppContainer: {
        backgroundColor: colors.lightGrey,
        alignItems: 'center',
        bottom: 50,
        left: "35%",
    },
    userName: {
        fontSize: 15,
        color: colors.medium
    },

    verified: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

export default ProfilScreen;