import React from 'react'
import { View, StyleSheet, FlatList, Pressable } from 'react-native'
import { ResearchRoutesParams } from '../../navigation/ResearchNavigator/ResearchNavigator'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import colors from '../../config/colors';
import CustomText from '../CustomText/CustomText';
import ProfilPicture from '../ProfilPicture/ProfilPicture';
import routes from '../../navigation/routes'

type objData = {
      id: number;
      name: string;
      username: string;
      description: string;
      profilPicture: string;
      coverPicture: string;
      isCertified: boolean;
}
type dataProps = {
   data: any;
}

const routeParams = {
   
}

const ResearchResults: React.FC<dataProps> = ({data,}) => {

   const navigation = useNavigation<NativeStackNavigationProp<ResearchRoutesParams>>()

   return (
      <Pressable style={styles.container} onPress={() => null}>
         <FlatList
            data={data}
            renderItem={({ item }) => (
               <Pressable onPress={() => navigation.navigate(routes.PROFIL, {
                  id: item.id,
                  username: item.username,
                  name: item.name,
                  description: item.description,
                  profilPicture: item.profilPicture,
                  isCertified: item.isCertified
               })} style={styles.userContainer} key={item.id}>
                  <ProfilPicture onPress={() => navigation.navigate(routes.PROFIL, {
                  id: item.id,
                  username: item.username,
                  name: item.name,
                  description: item.description,
                  profilPicture: item.profilPicture,
                  isCertified: item.isCertified
               })} source={item.profilPicture} size={50} />
                  <View style={styles.userInfos}>
                     <CustomText style={styles.name}>{item.name}</CustomText>
                     <CustomText style={styles.username}>{`@${item.username}`}</CustomText>
                  </View>
               </Pressable>
           )}
         />
      </Pressable>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10,
      flex: 1,
   },
   name: {
      fontSize: 18
   },

   username: {
      fontSize: 15,
      color: colors.medium
   },
   userContainer: {
      flex: 1,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center'
   },
   userInfos: {
      marginLeft: 15
   },
   
})

export default ResearchResults

