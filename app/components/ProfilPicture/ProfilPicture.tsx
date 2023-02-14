import React from 'react'
import { View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'


interface ProfilPictureProps {
    size: number;
    source: any;
    onPress: () => void;
}

const ProfilPicture = ({ size, source, onPress }: ProfilPictureProps) => {
    return (
    
    <TouchableWithoutFeedback testID='profil-picture' onPress={onPress}>
        <View
         style={{
            width: size+10,
            height: size+10,
            borderRadius: (size+10)/2,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                width: size+3,
                height: size+3,
                borderRadius: (size+3)/2,
                overflow: 'hidden',
            }}>
                <Image source={source} style={{
                height: size+3,
                width: size+3
                }} />
            </View>
        </View>
    </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
 })

export default ProfilPicture