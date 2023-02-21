import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

type ActivityIndicatorProps = {
    visible: boolean
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({visible = false}) => {
    if (!visible) return null;

   return <LottieView
        autoPlay
        loop
        source={require('../../assets/animations/loader.json')}
   />
}

const styles = StyleSheet.create({
   container: {}
})

export default ActivityIndicator