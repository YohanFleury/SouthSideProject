import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { Divider } from 'react-native-elements'

import colors from '../../config/colors'
import ProfilPicture from '../ProfilPicture/ProfilPicture'
import CustomText from '../CustomText/CustomText'

interface NotifCardProps {
    content: string;
    time: string;
    onPress: () => void;
    onPressAvatar: () => void;
    source: any;
}


const NotificationCard = ({ content, time, onPress, onPressAvatar, source }: NotifCardProps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <ProfilPicture size={65} source={source} onPress={onPressAvatar} />
                    </View>
                    <View style={styles.content}>
                        <CustomText>{content}</CustomText>
                    </View>
                    <View style={styles.time}>
                        <CustomText style={styles.timeText}>{time}</CustomText>
                    </View>
                </View>
                <Divider />
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    avatar: {
        padding: 5,
    },
    content: {
        padding: 5,
        width: '75%',
    },
    time: {
        padding: 5,
    },
    timeText: {
        color: colors.medium
    }
})
export default NotificationCard