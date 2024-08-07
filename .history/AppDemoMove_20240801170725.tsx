import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'


const AppDemoMove = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);


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