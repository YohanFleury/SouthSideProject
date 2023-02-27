import React, {useState} from 'react';

import { StyleSheet,} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal'

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { store } from './app/redux/store'

import DrawerNavigator from './app/navigation/DrawerNavigator/DrawerNavigator';
// Auth
import { auth } from './config/firebase'
import AuthNavigator from './app/navigation/AuthNavigator/AuthNavigator';
import ActivityIndicator from './app/components/ActivityIndicator/ActivityIndicator';


const App = () => {
  const [currentUser, setCurrentUser] = React.useState<any>(null)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
        <ActivityIndicator visible={loading} />
    )
  }

  return (
    
    <NavigationContainer>
      <Provider store={store}>
        <PortalProvider>
          {currentUser ? <DrawerNavigator /> : <AuthNavigator />}
        </PortalProvider>
      </Provider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default gestureHandlerRootHOC(App)

{/* <CustomScreen>
<ScrollView style={styles.container}>
  <CustomText>Test avec le composant texte custom</CustomText>
  <PostCard blurred={true} description={description} />
  <PostCard blurred={false} description={description} />
  <PostCard blurred description={description} />
  <StatusBar style="auto" />
</ScrollView>
</CustomScreen> */}