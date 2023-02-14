import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'

interface CoverPictureProps {
    source: any;
    onPress?: () => void;
}

const CoverPicture = ({ source, onPress }: CoverPictureProps) => {
    return (
    <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={source} />
        </View>
    </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }
})
export default CoverPicture