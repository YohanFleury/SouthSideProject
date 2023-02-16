import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomScreen from './app/components/CustomScreen/CustomScreen';
import PostCard from './app/components/PostCard/PostCard';

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { store } from './app/redux/store'

import AppNavigator from './app/navigation/AppNavigator/AppNavigator'
import CustomText from './app/components/CustomText/CustomText';
import ResearchScreen from './app/screens/ResearchScreen/ResearchScreen';
import ProfilScreen from './app/screens/ProfilScreen/ProfilScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';

const description = "Demain le psg affonte l'om. Veratti est la pierre angulare du jeu parisien on espere tous qu'il sera present demain avec la team !"
const images = [
  {
    id: 1,
    uri:'https://picsum.photos/250/300'
  },
]
export default function App() {

  return (
    <NavigationContainer>
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


{/* <CustomScreen>
<ScrollView style={styles.container}>
  <CustomText>Test avec le composant texte custom</CustomText>
  <PostCard blurred={true} description={description} />
  <PostCard blurred={false} description={description} />
  <PostCard blurred description={description} />
  <StatusBar style="auto" />
</ScrollView>
</CustomScreen> */}