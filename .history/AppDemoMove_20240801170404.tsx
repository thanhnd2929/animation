import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'


const AppDemoMove = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);


    return (
        <View>
            <Animated.View style={{}}>
                <Text>AppDemoMove</Text>
            </Animated.View>
        </View>
    )
}

export default AppDemoMove

const styles = StyleSheet.create({})