import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import CustomScreen from '../CustomScreen/CustomScreen';


interface FullScreenImageProps {
  images: string[];
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const sliderRef = useRef(null);

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
      ))}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableHighlight style={styles.closeButton} onPress={handleClose} >
            <AntDesign name="close" size={25} color="white" />
          </TouchableHighlight>
          <View style={styles.sliderContainer}>
            <Swiper
              ref={sliderRef}
              loop={false}
              showsPagination={false}
              index={images.indexOf(selectedImage)}
            >
              {images.map((image, index) => (
                <View key={index} style={{}}>
                  <Image
                    source={{ uri: image }}
                    style={{ height: '100%', width: "100%", resizeMode: 'contain' }}
                  />
                </View>
              ))}
            </Swiper>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 12,
    height: Dimensions.get('window').width / 3 - 12,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: "7%",
    right: 0,
    marginRight: 10,
    zIndex: 10
  },
  sliderContainer: {
    flex: 1,
  },
  fullScreenContainer: {

  }
});

export default FullScreenImage;
