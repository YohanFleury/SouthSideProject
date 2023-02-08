import React, { useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'
import Swiper from 'react-native-swiper';

import CustomText from '../CustomText/CustomText';

const imagess = [
    {
      id: 1,
      uri: 'https://picsum.photos/id/10/300/300',
    },
    {
      id: 2,
      uri: 'https://picsum.photos/id/100/300/300',
    },
    {
      id: 3,
      uri: 'https://picsum.photos/id/1000/300/300',
    },
  ]


type ImageType = {
    id: number,
    uri: string,
}

interface PostCardProps {
    description?: string;
    images?: ImageType[];
    blurred: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ description, images, blurred }) => {

   return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <BlurView intensity={70} 
                    tint="default">

            <View style={styles.imagesContainer}>
                <Swiper 
                    loop={false}
                    paginationStyle={{justifyContent: 'flex-end',marginRight: 10}}
                    dotColor="grey"
                    dotStyle={styles.dotStyle}
                    activeDotColor='white'
                    activeDotStyle={styles.dotStyle}
                >
                    {imagess.map(image => (
                        <Image
                        testID='image' 
                        key={image.id}
                        style={styles.image}
                        source={{uri: image.uri}} />

                    ))}
                </Swiper>
            </View>
            {description &&
            <View style={styles.description}>
                <CustomText>{description}</CustomText>
            </View>}
            </BlurView>
        </View>
        {!blurred &&
        <View style={styles.iconContainer} testID="iconcontainer">
            <Ionicons name="heart-outline" size={24} color="white" style={{marginBottom: 15}}/>
            <Entypo name="share" size={24} color="white" />
        </View>}
        {
            blurred && 
                <BlurView 
                    intensity={70} 
                    tint="default" 
                    testID='blurview'
                    style={styles.blurView}>    
                    <View style={styles.overlayContainer}>
                        <FontAwesome5 name="lock" size={44} color="white" />
                    </View>
                </BlurView>
        }
    </View>
   )
}

const styles = StyleSheet.create({
    mainContainer: {
       flexDirection: 'row',
        margin: 10,
        alignItems: "flex-end",
        overflow: "hidden",
        padding: 3,
    },
   container: {
    borderRadius: 15,
    width: "90%",
    overflow:"hidden",
   },
   dotStyle: {
    width: 5,
    height: 5,
   },
   imagesContainer: {
    height: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    padding: 2
   },
   description: {
    height: 'auto',
    padding: 10
   },
   image: {
    width: "100%",
    height: "100%",
   },
   iconContainer: {
    justifyContent: "flex-end",
    width: "10%",
    height: 100,
    padding: 5,
    borderRightWidth: 1,
    borderColor: "white"
   },
   blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: "10%",
    borderRadius: 15,
    overflow: "hidden"
   },
   overlayContainer: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
   }
})

export default PostCard