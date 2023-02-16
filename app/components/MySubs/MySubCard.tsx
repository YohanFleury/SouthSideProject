import React from 'react'
import { View, StyleSheet, Pressable, ImageSourcePropType } from 'react-native'
import CustomText from '../CustomText/CustomText'
import ProfilPicture from '../ProfilPicture/ProfilPicture'

type MySubCardProps = {
    onPress: () => void;
    name: string;
    source: ImageSourcePropType;
}

const MySubCard: React.FC<MySubCardProps> = ({ onPress, name, source }) => {
   return (
      <Pressable testID='my-sub-card' onPress={onPress} style={styles.container}>
        <View style={styles.ppContainer}>
            <ProfilPicture source={source} size={70} onPress={onPress} />
        </View>
        <View style={styles.textContainer}>
            <CustomText style={styles.text}>{name}</CustomText>
        </View>
      </Pressable>
   )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#2A293B',
    width: 120,
    marginRight: 10,
    height: 130,
    borderRadius: 15,
    overflow: 'hidden',
   },
   ppContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5
   },
   text: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 3
   }, 
   textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3
   }
})

export default MySubCard