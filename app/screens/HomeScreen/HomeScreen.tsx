import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, FlatList } from 'react-native';
import CustomScreen from '../../components/CustomScreen/CustomScreen';
import { useAppSelector } from '../../redux/store';
import PostCard from '../../components/PostCard/PostCard';
import { useScrollToTop } from '@react-navigation/native';
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import TipsModal from '../../components/Modals/TipsModal/TipsModal';

const HomeScreen = () => {
  const [postsList, setPostsList] = useState<any>()
  const reduxPostList = useAppSelector(state => state.users.postsList)
  const ref = React.useRef(null)
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  useEffect(() => {
    setPostsList(reduxPostList)
  }, [reduxPostList])
  
  useScrollToTop(ref)

 

  return (
      <CustomScreen>
        <FlatList
          data={postsList}
          ref={ref}
          renderItem={({ item }) => (
            <PostCard
            username={item.username}
            name={item.name}
            likes={item.likes}
            description={item.description}
            images={item.images}
            onTipsPress={() => bottomSheetModalRef.current?.present()}
            />
          )}
        />        
        <TipsModal tipsModalRef={bottomSheetModalRef} />

      </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.1
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 15,
    overflow: "hidden"
   },
});

export default HomeScreen;
