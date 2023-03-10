import React, {useRef, useState} from 'react'
import { StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import Swiper from 'react-native-swiper';
import { setChatVisible } from '../../redux/contextSlice/contextSlice';
import { useAppDispatch, } from '../../redux/store';

import ChatScreen from '../ChatScreen/ChatScreen';
import HomeScreen from '../HomeScreen/HomeScreen';


const HomeandChatScreen = () => {

    const swiperRef = useRef<any>(null);
    const dispatch = useAppDispatch()
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const [previousX, setPreviousX] = useState<number>(0)

  const goToNextSlide = () => {
      swiperRef.current.scrollBy(1);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;

    if(contentOffset.x > 0){dispatch(setChatVisible(true))}
    if(slideIndex == 0 && contentOffset.x < previousX){dispatch(setChatVisible(false))}
    if(slideIndex == 1 && contentOffset.x < 100) {dispatch(setChatVisible(false))}
   
    setPreviousX(contentOffset.x)
  }

    return (
        <Swiper
        loop={false}
        horizontal
        onScroll={handleScroll}
        onIndexChanged={e => setSlideIndex(e)}
        scrollEventThrottle={20}
        ref={swiperRef}
        showsPagination={false}
        >
            <HomeScreen onGoToChat={goToNextSlide} />
            <ChatScreen />
        </Swiper>
      );
    };
    
    const styles = StyleSheet.create({
      swiper: {
        height: '100%',
      },
      slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9DD6EB',
        flex: 1,
      },
      pagination: {
        bottom: 10,
      },
    });

export default HomeandChatScreen