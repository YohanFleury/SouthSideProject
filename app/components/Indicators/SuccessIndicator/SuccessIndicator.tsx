import React, {useRef, useEffect} from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../../../config/colors';

type SuccessIndicatorProps = {
    visible: boolean;
    onDone: () => void;
}

const SuccessIndicator: React.FC<SuccessIndicatorProps> = ({visible = false, onDone}) => {


    if (!visible) return null;

   return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
                autoPlay
                onAnimationFinish={onDone}
                source={require('../../../assets/animations/tick.json')}
                style={styles.animation}
        />
       </View> 
    </Modal>
    )    
}

const styles = StyleSheet.create({
    animation: {
        width: 150
       }, 
    
       container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dark.background
       }
})

export default SuccessIndicator