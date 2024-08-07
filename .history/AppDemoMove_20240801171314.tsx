import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'


const AppDemoMove = () => {

    const transX = useSharedValue(0);
    const transY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: withSpring(transX.value * 2) },
            { translateY: withSpring(transY.value * 2) },
        ]
    })
    );

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>App Demo Move</Text>
            <Animated.View style={[styles.box]}>
            </Animated.View>
        </View>
    )
}

export default AppDemoMove

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 150, height: 150,
        backgroundColor: 'lightgreen'
    }
})