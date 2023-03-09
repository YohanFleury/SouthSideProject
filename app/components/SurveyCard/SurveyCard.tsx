import React, {useState} from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';

import ProfilPicture from '../ProfilPicture/ProfilPicture'
import CustomText from '../CustomText/CustomText'
import colors from '../../config/colors';

interface SurveyCardProps {
    source: any;
    username: string;
    name: string;
    subject: string;
}

const SurveyCard: React.FC<SurveyCardProps> = ({source, name, username, subject}) => {
    const [selected, setSelected] = useState<boolean>(false)
   return (
    <>
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilInfos}>
                    <View style={{flexDirection: 'row'}}>
                        <ProfilPicture source={source} size={45} />
                        <View style={{justifyContent: 'space-evenly'}}>
                            <CustomText style={{fontSize: 16, fontWeight: 'bold',}}>{name}</CustomText>
                            <CustomText style={{fontSize: 14, color: colors.medium}}>{`@${username}`}</CustomText>
                        </View>
                    </View>
                    <View>
                        <MaterialIcons name="more-horiz" size={24} color="white" />
                    </View>
                </View>
            </View>
            <View style={styles.subject}>
                <CustomText style={{fontSize: 16}}>{subject}</CustomText>
            </View>
            <View style={styles.answers}>
                <Pressable onPress={() => setSelected(true)} style={[styles.answerDetail, {borderColor: selected ? colors.dark.primary : colors.lightGrey}]}>
                    <CustomText>Oui</CustomText>
                    {selected && <CustomText style={{position: 'absolute', right: 5, top: 10, color: colors.dark.primary}}>100%</CustomText>}
                </Pressable>
                <Pressable style={styles.answerDetail}>
                    <CustomText>Non</CustomText>
                    {selected && <CustomText style={{position: 'absolute', right: 5, top: 10}}>0%</CustomText>}
                </Pressable>
                <Pressable style={styles.answerDetail}>
                    <CustomText>TG</CustomText>
                    {selected && <CustomText style={{position: 'absolute', right: 5, top: 10}}>0%</CustomText>}
                </Pressable>
            </View>
        </View>
    </View>
            <Divider style={{marginBottom: 5, marginTop: 5}} width={0.3} color={colors.lightGrey} />
            </>
   )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-end",
        overflow: "hidden",
        paddingVertical: 10,
    },
   answers: {
    flex: 1
   },
   answerDetail: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5
   },
   container: {
    overflow:"hidden",
    flex: 1
   },
   header: {
    padding: 3
   },
   profilInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between'
   },
   subject: {
    height: 'auto',
    padding: 10
   },
})

export default SurveyCard