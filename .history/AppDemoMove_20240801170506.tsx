import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'


const AppDemoMove = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);


    return (
        <View>
            <Text>AppDemoMove</Text>
            <Animated.View style={[styles.container]}>
            </Animated.View>
        </View>
    )
}

export default AppDemoMove

const styles = StyleSheet.create({
    container: {
        width: 200, height: 200,
        backgroundColor:'lightgreen'
    }
})