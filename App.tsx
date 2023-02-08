import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomScreen from './app/components/CustomScreen/CustomScreen';
import PostCard from './app/components/PostCard/PostCard';

import { Provider } from 'react-redux'
import { store } from './app/redux/store'

const description = "Demain le psg affonte l'om. Veratti est la pierre angulare du jeu paeratti est parisien on espere tous qu'il sera present demain avec la team !"
const images = [
  {
    id: 1,
    uri:'https://picsum.photos/250/300'
  },
]
export default function App() {

  return (
    <Provider store={store}>
    <CustomScreen>
    <ScrollView style={styles.container}>
      <Text>Open up App.tsx to start working on your app with chat fucking gpt !</Text>
      <PostCard blurred={true} description={description} />
      <PostCard blurred={false} description={description} />
      <PostCard blurred description={description} />
      <StatusBar style="auto" />
    </ScrollView>
    </CustomScreen>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
