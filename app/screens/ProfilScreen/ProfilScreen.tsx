import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView,  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ResearchRoutesParams} from '../../navigation/ResearchNavigator/ResearchNavigator'
import { BottomSheetModal} from '@gorhom/bottom-sheet';

import ProfilPicture from '../../components/ProfilPicture/ProfilPicture';
import CoverPicture from '../../components/CoverPicture/CoverPicture';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomText from '../../components/CustomText/CustomText';
import colors from '../../config/colors';
import CustomScreen from '../../components/CustomScreen/CustomScreen' 
import BackButton from '../../components/BackButton/BackButton';
import PostCard from '../../components/PostCard/PostCard';
import LiveScreen from '../LivesScreen/LiveScreen';
import FullScreenImage from '../../components/FullscreenImages/FullscreenImages';
import TipsModal from '../../components/TipsModal/TipsModal';


type ProfilScreenRouteProp = RouteProp<ResearchRoutesParams, 'Profil'>;

const imageURIs = [
    "https://picsum.photos/600/900?random=1",
    "https://picsum.photos/600/900?random=2",
    "https://picsum.photos/600/900?random=3",
    "https://picsum.photos/600/900?random=4",
    "https://picsum.photos/600/900?random=5",
    "https://picsum.photos/600/900?random=6",
    "https://picsum.photos/600/900?random=7",
    "https://picsum.photos/600/900?random=8",
    "https://picsum.photos/600/900?random=9",
    "https://picsum.photos/600/900?random=10",
    "https://picsum.photos/600/900?random=11",
    "https://picsum.photos/600/900?random=12",
    "https://picsum.photos/600/900?random=13",
    "https://picsum.photos/600/900?random=14",
    "https://picsum.photos/600/900?random=15",
    "https://picsum.photos/600/900?random=16",
    "https://picsum.photos/600/900?random=17",
    "https://picsum.photos/600/900?random=18",
    "https://picsum.photos/600/900?random=19",
    "https://picsum.photos/600/900?random=20",
  ];

const ProfilScreen = () => {

    const route = useRoute<ProfilScreenRouteProp>()
    const { id, name, username, description, profilPicture, isCertified } = route.params;
    
    const [contentType, setContentType] = useState<string>('posts')
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    return (
        <>
        <CustomScreen>
        <View style={styles.BackButton}>
            <BackButton />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                    <View style={[styles.ppContainer, {width: 80+10, height: 80+10, borderRadius: (80+10)/2}]}>
                        <ProfilPicture size={80} source={profilPicture} />
                    </View>
                <View style={styles.container2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                        <View style={{width: '80%'}}>
                            <View style={styles.verified}>
                                <CustomText style={styles.accountName}>
                                    {name}
                                </CustomText>
                                <Feather name="check-circle" size={18} color="white" />
                            </View>
                            <CustomText style={styles.userName}>
                                {`@${username}`}                    
                            </CustomText>
                            <CustomText style={styles.bio}>
                                {description}
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
            <View style={styles.secondContainer}>
                <View testID='btnView' style={styles.buttonsContainer}>
                    <View>
                        <Button 
                            title="Posts" 
                            color={contentType === "posts" ? colors.dark.primary : colors.white} 
                            onPress={() => setContentType('posts')} 
                        />
                        {contentType === "posts" &&
                        <View style={{borderWidth: 0.9, borderColor: colors.dark.primary, }} />}
                    </View>
                    <View>
                        <Button 
                            title="Medias" 
                            color={contentType === "medias" ? colors.dark.primary : colors.white} 
                            onPress={() => setContentType('medias')} 
                        />
                        {contentType === "medias" &&
                        <View style={{borderWidth: 0.9, borderColor: colors.dark.primary, }} />}
                    </View>
                    <View>
                        <Button 
                            title="Lives" 
                            color={contentType === "lives" ? colors.dark.primary : colors.white} 
                            onPress={() => setContentType('lives')}
                        />
                        {contentType === "lives" &&
                        <View style={{borderWidth: 0.7, borderColor: colors.dark.primary, }} />}
                    </View>
                </View>
                <View style={{width: '90%', alignSelf: 'center', marginTop: 8, marginBottom: 10}}>
                    
                </View>
            </View>
            <View>
                {contentType === "posts" &&
                <>
                    <PostCard onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username='elonmuskX' name="Elon Musk" likes={32445} blurred={false} description={description} />
                    <PostCard onTipsPress={() => bottomSheetModalRef.current?.present()} username='elonmuskX' name="Elon Musk" likes={32445} blurred={false} description={description} />
                    <PostCard onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username='elonmuskX' name="Elon Musk" likes={32445} blurred={true} description={description} />
                    <PostCard onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username='elonmuskX' name="Elon Musk" likes={32445} blurred={false} description={description} />
                </>
                }
                {contentType === "medias" &&
                <FullScreenImage images={imageURIs} />
                }
                {contentType === "lives" &&
                <LiveScreen />
                }
            </View>
        </ScrollView>
    </CustomScreen>
        <TipsModal tipsModalRef={bottomSheetModalRef} />
        </>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
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
        justifyContent: 'space-between'
        
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
    },
    ppContainer: {
        backgroundColor: colors.lightGrey,
        alignItems: 'center',
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