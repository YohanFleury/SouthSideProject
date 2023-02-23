import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import NotifCard from '../../components/NotificationCard/NotificationCard';
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import colors from '../../config/colors';

const notifications = [
    {
        id: 1,
        notifContent: "New post !",
        notifTime: "6h",
        avatarSource: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: 2,
        notifContent: "Avatars are found all over ui design from lists to profile screens.",
        notifTime: "10h",
        avatarSource: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
        id: 3,
        notifContent: "They are commonly used to represent",
        notifTime: "11h",
        avatarSource: 'https://randomuser.me/api/portraits/men/21.jpg',
    },
    {
        id: 4,
        notifContent: "Avatars to profile screens. They are commonly used to represent",
        notifTime: "17h",
        avatarSource: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
        id: 5,
        notifContent: "Avatars are found all over ui design from lists to profile screens. They are commonly used to represent",
        notifTime: "21h",
        avatarSource: 'https://randomuser.me/api/portraits/men/12.jpg'
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