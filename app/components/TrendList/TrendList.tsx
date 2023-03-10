import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ResearchTrend from '../ResearchTrend/ResearchTrend'
import { ResearchRoutesParams } from '../../navigation/ResearchNavigator/ResearchNavigator'
import routes from '../../navigation/routes'
import CustomText from '../CustomText/CustomText'
import CustomButton from '../CustomButton/CustomButton'
import colors from '../../config/colors'
interface TrendListProps {
    data: any
}

const TrendList: React.FC<TrendListProps> = ({data}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ResearchRoutesParams>>()
    const [resultsNumber, setResultsNumber] = useState<number>(4)
   return (
    <View style={{flex: 1}}>
        <View style={{padding: 10}}>
            <CustomText>Tendance du mois</CustomText>
        </View>
        {
            data.map((item: any, index: number) => { 
                if(index < resultsNumber)
                return (
                <ResearchTrend 
                  name={item.name}
                  username={item.username}
                  description={item.description} 
                  key={index} 
                  source={item.profilPicture} 
                  onPress={() => navigation.navigate(routes.PROFIL, {
                  id: item.id,
                  username: item.username,
                  name: item.name,
                  description: item.description,
                  profilPicture: item.profilPicture,
                  isCertified: item.isCertified
               })} />
            )})
        }
        <Button title='Plus de résultats' onPress={() => setResultsNumber(resultsNumber + 5)} color={colors.dark.primary} />
    </View>
   )
}

const styles = StyleSheet.create({
   container: {}
})

export default TrendList