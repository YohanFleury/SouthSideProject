import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Image, useWindowDimensions} from 'react-native'
import { FontAwesome5, Entypo, Ionicons, MaterialIcons, Foundation, FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'
import Swiper from 'react-native-swiper';
import { BottomSheetModal} from '@gorhom/bottom-sheet';
import { useAppSelector } from '../../redux/store';
import { Divider } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


import CustomText from '../CustomText/CustomText';
import ProfilPicture from '../ProfilPicture/ProfilPicture';
import colors from '../../config/colors';
import TipsModal from '../Modals/TipsModal/TipsModal';
import PostOptionsModal from '../Modals/PostOptionsModal/PostOptionsModal';
import UnlockModal from '../Modals/UnlockModal/UnlockModal';

interface PostCardProps {
    description?: string;
    images?: string[];
    blurred?: boolean;
    likes: number;
    username: string;
    name: string;
    onTipsPress: () => void;
    source: any;
}

const DOUBLE_PRESS_DELAY = 300;

const PostCard: React.FC<PostCardProps> = ({ description, images, blurred, username, name, likes, onTipsPress, source }) => {
    const theme = useAppSelector(state => state.context.theme)

    const {width, height} = useWindowDimensions()
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isSignet, setIsSignet] = useState<boolean>(false)
    const [lastPress, setLastPress] = useState(0);
    
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const unlockModalRef = useRef<BottomSheetModal>(null);


    const handleDoublePress = () => {
      const time = new Date().getTime();
      const delta = time - lastPress;
  
      if (delta < DOUBLE_PRESS_DELAY) {
        setIsLiked(x => !x)
      }
      setLastPress(time);
    };



   return (
       <View style={styles.mainContainer}>
        <PostOptionsModal tipsModalRef={bottomSheetModalRef} />
        <UnlockModal unlockModalRef={unlockModalRef} />
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilInfos}>
                    <View style={{flexDirection: 'row'}}>
                        <ProfilPicture source={source} size={45} />
                        <View style={{justifyContent: 'space-evenly'}}>
                            <CustomText style={{fontSize: 16, fontWeight: 'bold',}}>{name}</CustomText>
                            <CustomText style={{fontSize: 14, color: colors.medium}}>{`@${username}`}</CustomText>
                        </View>
                    </View>
                    <View>
                        <MaterialIcons 
                            name="more-horiz" 
                            size={24} 
                            color={theme === 'dark' ? "white" : "black"} 
                            onPress={() => bottomSheetModalRef.current?.present()} />
                    </View>
                </View>
                {description &&
                <View style={styles.description}>
                    <CustomText style={{fontSize: 16}}>{description}</CustomText>
                </View>}
            </View>

            {images &&
                <Swiper 
                    loop={false}
                    paginationStyle={{justifyContent: 'flex-end',marginRight: 10}}
                    dotColor="grey"
                    dotStyle={styles.dotStyle}
                    activeDotColor='white'
                    activeDotStyle={styles.dotStyle}
                    style={{height: 400}}
                >
                    {images.map(image => (
                    <TouchableWithoutFeedback key={image} onPress={handleDoublePress}>
                        <Image
                        testID='image' 
                        style={{width: width, height: "100%", }}
                        source={{uri: image}} />
                    </TouchableWithoutFeedback>

                    ))}
                </Swiper>}
            <View style={styles.iconContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', flex: 1/3}}>
                    <Ionicons 
                        name={isLiked ? "heart" : "heart-outline"} 
                        size={27} 
                        color={isLiked 
                            ? colors.dark.primary 
                            : theme === "dark" 
                            ? "white"
                            : 'black'
                        } 
                        onPress={() => setIsLiked(x => !x)}
                    />
                    <CustomText style={{fontSize: 11, marginLeft: 5, marginTop: 5}}>{likes}</CustomText>
                </View>
                <View style={{flex: 1/3, alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress={onTipsPress} style={{borderWidth: 1, borderColor: theme === 'dark' ? "white" : "black", width: 26, height: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome 
                            name="dollar" 
                            size={19} 
                            color={theme === 'dark' ? "white" : "black"}  />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex: 1/3, alignItems: 'flex-end'}}>
                    <Ionicons 
                        name="bookmarks-outline" 
                        size={24} 
                        color={theme === 'dark' ? "white" : "black"}  />
                </View>
            </View>
            <Divider style={{marginBottom: 5, marginTop: 5}} width={0.3} color={theme === "dark" ? colors.lightGrey : colors.medium} />
        </View>
        {
            blurred && 
                <BlurView 
                    intensity={70} 
                    tint="default" 
                    testID='blurview'
                    style={styles.blurView}
                    
                    >    
                    <View style={styles.overlayContainer}>
                        <TouchableWithoutFeedback onPress={() => unlockModalRef.current?.present()} style={styles.lockView}>
                            <FontAwesome5 name="lock" size={34} color={colors.dark.primary} />
                        </TouchableWithoutFeedback>
                    </View>
                </BlurView>
        }
    </View>
   )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-end",
        overflow: "hidden",
        paddingVertical: 10
    },
   container: {
    overflow:"hidden",
    flex: 1
   },
   header: {
    padding: 3
   },
   profilInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   dotStyle: {
    width: 5,
    height: 5,
   },
   imagesContainer: {
    overflow: 'hidden',
    backgroundColor: 'pink',
    flex: 1,
   },
   description: {
    height: 'auto',
    padding: 10
   },
   iconContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: "hidden",
    borderRadius: 25
   },
   overlayContainer: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
   },
   lockView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.dark.primary,
    backgroundColor: colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center'
   }
})

export default PostCard