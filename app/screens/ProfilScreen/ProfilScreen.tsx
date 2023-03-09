import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons, Ionicons, Octicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ResearchRoutesParams} from '../../navigation/ResearchNavigator/ResearchNavigator'
import { BottomSheetModal} from '@gorhom/bottom-sheet';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';
import Animated, {SlideInDown, SlideInUp} from 'react-native-reanimated';
import Swiper from 'react-native-swiper' ;
import { useAppSelector } from '../../redux/store';

import ProfilPicture from '../../components/ProfilPicture/ProfilPicture';
import CoverPicture from '../../components/CoverPicture/CoverPicture';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomText from '../../components/CustomText/CustomText';
import colors from '../../config/colors';
import PostCard from '../../components/PostCard/PostCard';
import FullScreenImage from '../../components/FullscreenImages/FullscreenImages';
import TipsModal from '../../components/Modals/TipsModal/TipsModal';
import GoBackBtn from '../../components/BackButton/BackButton';
import SubscribeModal from '../../components/Modals/SubscribeModal/SubscribeModal';
import SurveyCard from '../../components/SurveyCard/SurveyCard';

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
    const isSub = useAppSelector(state => state.users.isSub)
    const [contentType, setContentType] = useState<string>('posts')
    const [showBackButton, setShowBackButton] = useState<boolean>(false);
    const [previousOffset, setPreviousOffset] = useState<number>(0)
    const [subscribeButtonVisible, setSubscribeButtonVisible] = useState(true);
    const [showHeader, setShowHeader] = useState<boolean>(false)
    
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const subscribeModalRef = useRef<BottomSheetModal>(null);
    const buttonRef = useRef<View>(null);
    const myViewRef = useRef<View>(null);
    const myOtherViewRef = useRef<View>(null);
    
    const screenHeight = Dimensions.get('window').height
    
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset } = event.nativeEvent;
        //Goback button apparaît que si le user scroll vers le haut
        const show = contentOffset.y < previousOffset;
        setShowBackButton(show);
        setPreviousOffset(contentOffset.y)

        //Detecte si le bouton subscribe est visible 
        buttonRef.current?.measure((x, y, width, height, pageX, pageY) => {
            setSubscribeButtonVisible(
                pageY > (-0.0033*screenHeight) ?
                true : 
                pageY > (-0.1339*screenHeight) ? 
                true : 
                false
            );
          });
    };

    return (
        
        <View style={styles.grandeContainor}>
        <ScrollView 
            stickyHeaderIndices={[2]} 
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={20}
            >
            <View style={[styles.mainContainer, {paddingTop: 0.0558*screenHeight}]}>
                <ProfilPicture size={75} source={profilPicture} />
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
                            <View style={styles.upIcons}>
                                <FontAwesome name="star-o" size={19} color={colors.white} />
                            </View>
                            <View style={styles.upIcons}>
                                <Fontisto name="bell" size={19} color={colors.white} />
                            </View>
                            <View style={styles.upIcons}>
                                <MaterialCommunityIcons name="email-send-outline" size={19} color={colors.white} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View ref={buttonRef} style={{padding: 15, alignItems: 'center'}}>
                {!isSub && 
                <CustomButton title="S'abonner" onPress={() => subscribeModalRef.current?.present()} style={{width: "100%", justifyContent: 'center'}} />}
                {isSub && 
                <CustomButton title="Abonné" onPress={() => null} style={{backgroundColor: 'transparent', width: 120}} icon={<Ionicons name="ios-checkmark-sharp" size={24} color="white" />} />}
            </View>
            <View testID='sticky' style={{height: 60 }}>
                    {!subscribeButtonVisible &&
                <Animated.View  entering={SlideInUp} style={[styles.backnsub, ]}>
                    <BlurView ref={myViewRef} tint='dark' intensity={100}>
                        <View style={{height: Dimensions.get('window').height / 18}} />
                        <View style={styles.upContainer}>
                            <View style={{flex: 1/3, alignItems: 'flex-start'}}>
                                <GoBackBtn />
                            </View>
                            <View style={{flex: 1/3, alignItems: 'center', marginBottom: 5}}>
                                <ProfilPicture size={35} source={profilPicture}/>
                            </View>
                            <View style={{flex: 1/3, alignItems: 'flex-end'}}>
                                {!isSub &&
                                <CustomButton 
                                    title="Subscribe" 
                                    onPress={() => subscribeModalRef.current?.present()} 
                                    style={{backgroundColor: 'transparent'}}
                                    textStyle={{fontSize: 16}}    
                                /> } 
                                {isSub && 
                                <View style={styles.searchIcon}>
                                    <Octicons name="search" size={20} color="white" />
                                </View>
                                } 
                            </View>
                        </View>
                        <View style={styles.secondContainer}>
                    <View testID='btnView' style={styles.buttonsContainer}>
                        <View>
                            <Button 
                                title="Posts" 
                                color={contentType === "posts" ? colors.white : colors.medium} 
                                onPress={() => setContentType('posts')} 
                            />
                            {contentType === "posts" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 50, alignSelf: 'center' }} />}
                        </View>
                        <View>
                            <Button 
                                title="Medias" 
                                color={contentType === "medias" ? colors.white : colors.medium} 
                                onPress={() => setContentType('medias')} 
                            />
                            {contentType === "medias" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 60, alignSelf: 'center' }} />}
                        </View>
                        <View>
                            <Button 
                                title="Lives" 
                                color={contentType === "lives" ? colors.white : colors.medium} 
                                onPress={() => setContentType('lives')}
                            />
                            {contentType === "lives" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 40, alignSelf: 'center' }} />}
                        </View>
                    </View>
                </View>
                    </BlurView>
                </Animated.View>}
                </View>
                <View ref={myOtherViewRef} style={styles.secondContainer}>
                    <View testID='btnView' style={styles.buttonsContainer}>
                        <View>
                            <Button 
                                title="Posts" 
                                color={contentType === "posts" ? colors.white : colors.medium} 
                                onPress={() => setContentType('posts')} 
                            />
                            {contentType === "posts" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 50, alignSelf: 'center' }} />}
                        </View>
                        <View>
                            <Button 
                                title="Medias" 
                                color={contentType === "medias" ? colors.white : colors.medium} 
                                onPress={() => setContentType('medias')} 
                            />
                            {contentType === "medias" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 62, alignSelf: 'center' }} />}
                        </View>
                        <View>
                            <Button 
                                title="Lives" 
                                color={contentType === "lives" ? colors.white : colors.medium} 
                                onPress={() => setContentType('lives')}
                            />
                            {contentType === "lives" &&
                            <View style={{borderWidth: 1.5, borderColor: colors.dark.primary, width: 40, alignSelf: 'center' }} />}
                        </View>
                    </View>
                </View>
                <View>
                {contentType === "posts" &&
                <>
                    <PostCard source={profilPicture} onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username={username} name={name} likes={32445} blurred={false} description={description} />
                    <SurveyCard subject='Pensez vous que cette appli éclatée va marcher un jour ?' name={name} username={username} source={profilPicture} />
                    <PostCard source={profilPicture} onTipsPress={() => bottomSheetModalRef.current?.present()} username={username} name={name} likes={32445} description={description} />
                    <PostCard source={profilPicture} onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username={username} name={name} likes={324} blurred={!isSub} description={description} />
                    <PostCard source={profilPicture} onTipsPress={() => bottomSheetModalRef.current?.present()} images={["https://source.unsplash.com/random/21"]} username={username} name={name} likes={2005} blurred={false} description={description} />
                </>
                }
                {contentType === "medias" &&
                <FullScreenImage images={imageURIs} />
                }
                {contentType === "lives" &&
                <FullScreenImage images={imageURIs} />
                }
            </View> 
        <TipsModal tipsModalRef={bottomSheetModalRef} />
        <SubscribeModal name={name} username={username} subscribeModalRef={subscribeModalRef} source={profilPicture} />
        </ScrollView>
        </View>
)
}
const styles = StyleSheet.create({
    grandeContainor: {
        flex: 1,
        backgroundColor: colors.dark.background,
        paddingBottom: 80// prendre en compte la hauteur de la barre d'état
    },
    scrollView: {
        flex: 1,
        marginTop: 50, // prendre en compte la hauteur de l'en-tête
        marginBottom: 50,
    },
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
    backnsub: {
      },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    buttonsSelected: {

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
        top: -20,
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
        padding: 2,
    },
    secondContainer: {
    },
    searchIcon: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    test: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    ppContainer: {
        backgroundColor: colors.lightGrey,
    },
    upContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    upIcons: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: colors.dark.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
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