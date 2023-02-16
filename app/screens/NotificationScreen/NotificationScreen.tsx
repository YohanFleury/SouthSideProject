import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import NotifCard from '../../components/NotificationCard/NotificationCard';
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import colors from '../../config/colors';

const notifications = [
    {
        id: 1,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "6h",
        avatarSource: require('../../assets/verratti.png')
    },
    {
        id: 2,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "10h",
        avatarSource: require('../../assets/verratti.png')
    },
    {
        id: 3,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "11h",
        avatarSource: require('../../assets/verratti.png')
    },
    {
        id: 4,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "17h",
        avatarSource: require('../../assets/verratti.png')
    },
    {
        id: 5,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "21h",
        avatarSource: require('../../assets/verratti.png')
    },
]

const NotificationScreen = () => {
    return (
        <CustomScreen>
            <View style={styles.container}>
                <FlatList
                    data={notifications}
                    keyExtractor={notifs => notifs.id.toString()}
                    renderItem={({ item }) => (
                        <NotifCard
                            source={item.avatarSource}
                            content={item.notifContent}
                            time={item.notifTime}
                            onPress={() => console.log("Ceci est la notification avec l'id " + item.id)}
                            onPressAvatar={() => console.log("redirige vers le profil à l'id " + item.id)}
                        />

                    )}
                />
            </View>
        </CustomScreen>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
export default NotificationScreen