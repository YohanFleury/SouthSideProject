import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppSelector } from '../../redux/store';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomSheetModal} from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


import PostCard from '../../components/PostCard/PostCard';
import TipsModal from '../../components/Modals/TipsModal/TipsModal';
import colors from '../../config/colors';
import CustomText from '../../components/CustomText/CustomText';
import { HomeNavigatorParams } from '../../navigation/HomeNavigator/HomeNavigator';
import routes from '../../navigation/routes';

const screenHeight =  Dimensions.get('window').height

interface HomeScreenProps {
  onGoToChat: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({onGoToChat}) => {

  
  const theme = useAppSelector(state => state.context.theme)
  const navigation = useNavigation<any>()
  const [postsList, setPostsList] = useState<any>()
  const reduxPostList = useAppSelector(state => state.users.postsList)
  const ref = React.useRef(null)
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  useEffect(() => {
    setPostsList(reduxPostList)
  }, [reduxPostList])
  
  useScrollToTop(ref)

  return (
      <View style={{flex: 1}}>
        <View style={[
          styles.mainContainer,
          {backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background,}]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={postsList}
            ref={ref}
            renderItem={({ item, index }) => (
              <>
                {index == 0 && <View style={{height: 0.1*screenHeight}} />}
                <PostCard
                source={'https://randomuser.me/api/portraits/men/2.jpg'}
                username={item.username}
                name={item.name}
                likes={item.likes}
                description={item.description}
                images={item.images}
                onTipsPress={() => bottomSheetModalRef.current?.present()}
                />
              </>
            )}
          />        
            <BlurView tint='dark' intensity={100} style={[styles.header, StyleSheet.absoluteFill]}>
              <Ionicons name="menu" size={31} color="white" onPress={() => navigation.openDrawer()} />
              <CustomText 
                style={{marginBottom: 5, color: colors.white}}>
                  Accueil
                </CustomText>
              <Ionicons name="chatbox-outline" size={26} color="white" onPress={onGoToChat} />
              <View style={styles.pastille}>
                <CustomText style={{color: "white", fontSize: 11, fontWeight: 'bold'}}>2</CustomText>
              </View>
            </BlurView>
          <TipsModal tipsModalRef={bottomSheetModalRef} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.1
  },
  mainContainer: {
    flex: 1,
  },
  
   header: {
    height: 0.11*screenHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 10, 
   },
   pastille: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '30%',
    right: '1%'
   }
});

export default HomeScreen;
