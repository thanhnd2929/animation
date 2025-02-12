import { Button, StyleSheet, Text, View } from 'react-native'
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

    const handlePress = () => {
        transX.value += 10;
        transY.value -= 10;
        console.log('pressed');

    }
    const handleBack = () => {
        transX.value = 0;
        transY.value = 0;
        console.log('pressed');

    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>App Demo Move</Text>
            <Animated.View style={[styles.box, animatedStyle]}>
            </Animated.View>
            <Button title='Move the Box' onPress={handlePress} />
            <Button title='Back to origin position' onPress={handleBack} />
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