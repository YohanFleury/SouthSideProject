import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import CustomText from '../CustomText/CustomText'
import routes from '../../navigation/routes'
import MySubCard from './MySubCard'
import { ResearchRoutesParams } from '../../navigation/ResearchNavigator/ResearchNavigator'


type MySubsProps = {
    data: any;
    title: string;
}

const MySubs: React.FC<MySubsProps> = ({data, title}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ResearchRoutesParams>>()

   return (
      <View style={styles.container}>
        <View>
            <CustomText>{title}</CustomText>
        </View>
        <View style={styles.subContainer}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) => {
                    return (
                    <MySubCard name={item.name} key={item.id} source={item.profilPicture} onPress={() => navigation.navigate(routes.PROFIL, {
                        id: item.id,
                        username: item.username,
                        name: item.name,
                        description: item.description,
                        profilPicture: item.profilPicture,
                        isCertified: item.isCertified
                     })} />
                )}}
            />
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    padding: 10
   },
   subContainer: {
    marginTop: 10
   }
})

export default MySubs