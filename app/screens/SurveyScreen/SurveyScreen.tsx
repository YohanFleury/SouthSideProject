import React, {useState} from 'react'
import { View, StyleSheet, Keyboard, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomScreen from '../../components/CustomScreen/CustomScreen'
import CustomText from '../../components/CustomText/CustomText'
import colors from '../../config/colors';
import CustomButton from '../../components/CustomButton/CustomButton';

const SurveyScreen = () => {
    const [question, setQuestion] = useState<string>('')
    const [responseUna, setResponseUna] = useState<string>('')
    const [responseDos, setResponseDos] = useState<string>('')
    const [responseTres, setResponseTres] = useState<string>('')
    const [responseQuatro, setResponseQuatro] = useState<string>('')

    const [showRepTres, setShowRepTres] = useState<boolean>(false)
    const [showRepQuatro, setShowRepQuatro] = useState<boolean>(false)

    const handleAdd = () => {
        if (showRepTres) {
            setShowRepQuatro(true)
        } else {
            setShowRepTres(true)
        }
    }

    return (
      <CustomScreen>
        <View style={styles.container}>
            <CustomText style={styles.text}>Question</CustomText>
            <CustomInput
                placeholder='Pose ta question' 
                onChangeText={(e) => setQuestion(e)} 
                returnKeyType="search"
                onSubmitEditing={Keyboard.dismiss}
                width="90%"
                value={question}
            />
        </View>
        <View style={styles.container}>
            <CustomText style={styles.text}>Réponses</CustomText>
            <CustomInput
                placeholder='Choisis une réponse' 
                onChangeText={(e) => setResponseUna(e)} 
                returnKeyType="search"
                onSubmitEditing={Keyboard.dismiss}
                width="70%"
                value={responseUna}
            />
            <CustomInput
                placeholder='Choisis une réponse' 
                onChangeText={(e) => setResponseDos(e)} 
                returnKeyType="search"
                onSubmitEditing={Keyboard.dismiss}
                width="70%"
                value={responseDos}
            />
            {showRepTres &&
            <View>
                {!showRepQuatro &&
                <AntDesign 
                    name="close" 
                    size={24} 
                    color={colors.white} 
                    style={styles.cross}
                    onPress={() => setShowRepTres(false)}      
                />  }              
                <CustomInput
                    placeholder='Choisis une réponse' 
                    onChangeText={(e) => setResponseTres(e)} 
                    returnKeyType="search"
                    onSubmitEditing={Keyboard.dismiss}
                    width="70%"
                    value={responseTres}
                />
            </View>
            }
            {showRepQuatro && 
            <View>
                <AntDesign 
                    name="close" 
                    size={24} 
                    color={colors.white} 
                    style={styles.cross}
                    onPress={() => setShowRepQuatro(false)}      
                />
                <CustomInput
                    placeholder='Choisis une réponse' 
                    onChangeText={(e) => setResponseQuatro(e)} 
                    returnKeyType="search"
                    onSubmitEditing={Keyboard.dismiss}
                    width="70%"
                    value={responseQuatro}
                />
            </View>
            }
            <AntDesign 
                name="pluscircleo" 
                style={{alignSelf: 'flex-end', marginTop: 10}}
                size={34} 
                color={
                    showRepQuatro && showRepQuatro
                    ? colors.medium
                    : colors.white
                }
                onPress={
                    showRepQuatro && showRepQuatro 
                    ? () => null 
                    : handleAdd}
                />
        </View>
        <CustomButton 
            title='Valider le sondage' 
            textStyle={styles.text}
            disabled={(responseUna.length == 0) || (responseDos.length == 0) || (question.length == 0)}
            style={styles.btn}
            onPress={
                (responseUna.length > 0) && (responseDos.length > 0) && (question.length > 0)
                ? () => null
                : () => null
                } />
      </CustomScreen>
   )
}

const styles = StyleSheet.create({
   btn: {
       width: '80%',
       alignSelf: 'center',
       justifyContent: 'center',
       position: 'absolute',
       bottom: "10%"
   },
   container: {
    marginTop: 30,
    padding: 15,
   },
   cross: {
    position: 'absolute',
    top: "50%",
    zIndex: 10
   },
   text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
   },
})

export default SurveyScreen