import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Feather, MaterialCommunityIcons, Entypo, Fontisto, FontAwesome } from '@expo/vector-icons';
import { useAppSelector } from '../../redux/store'

import colors from '../../config/colors'
import CustomText from '../CustomText/CustomText'
import ProfilPicture from '../ProfilPicture/ProfilPicture'
import CustomButton from '../CustomButton/CustomButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ResearchTrendProps {
    name: string;
    username: string;
    description: string;
    source: any;
    category?: string;
    onPress: () => void;
}

const ResearchTrend: React.FC<ResearchTrendProps> = ({name, username, description, source, category, onPress}) => {
    const theme = useAppSelector(state => state.context.theme)

   return (
      <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
        <View style={[styles.card, {backgroundColor: theme === 'dark' ? '#2A293B' : '#636363'}]}>
            <View style={styles.identity}>
                <View style={styles.profilPic}>
                    <ProfilPicture size={90} source={source} />
                </View>
                <Entypo
                    style={{position: 'absolute', top: 0, right: 10}}
                    name="medal" 
                    size={24} 
                    color={colors.dark.primary} />
                <View style={styles.name}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CustomText style={styles.text}>{name}</CustomText>
                        <Feather style={{marginLeft: 5}} name="check-circle" size={16} color="white" />
                    </View>
                    <CustomText style={styles.userName}>{`@${username}`}</CustomText>
                </View>
            </View>
            <View style={styles.rightPart}>
                <View style={styles.category}>
                    <CustomText>Immobilier</CustomText>
                    <View style={styles.icons}>
                        <View style={styles.upIcons}>
                            <FontAwesome 
                            name="star-o" 
                            size={19} 
                            color="white" />
                        </View>
                    </View>
                </View>
                <View style={styles.descriContainer}>
                    <CustomText style={styles.description}>
                        {description.slice(0, 70) + (description.length > 70 ? '...' : '')}
                    </CustomText>
                </View>
                <CustomButton 
                    style={styles.btn} 
                    title='Go' 
                    onPress={onPress} 
                    icon={<Entypo style={{marginLeft: 10}} name="arrow-right" size={24} color="white" />}  />
            </View>
        </View>
      </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   btn: {
    width: '50%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'pink',
   },
   container: {
    padding: 10
   },
   card: {
    height: 180,
    width: '100%',
    backgroundColor: 'pink',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 5
   },
   category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
   },
   description: {
    fontSize: 15
   },
   descriContainer: {
    position: 'absolute',
    bottom: 60,
    padding: 10
   },
   header: {
    marginBottom: 15
   },
   icons: {
    flexDirection: 'row'
   },
   identity: {
    flex: 2/5,
    borderRightWidth: 1,
    borderRightColor: "black",
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'center'
   },
   name: {
    position: 'absolute',
    bottom: 20
   },
   profilPic: {
    position: 'absolute',
    top: 5,
    left: 15
   },
   rightPart: {
    flex: 3/5,
    padding: 5,
    justifyContent: 'space-between'
   },
   text: {
    fontSize: 16
   },
   upIcons: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: colors.dark.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
   userName: {
    fontSize: 16,
    color: colors.medium,
    marginTop: 5
   }
})

export default ResearchTrend