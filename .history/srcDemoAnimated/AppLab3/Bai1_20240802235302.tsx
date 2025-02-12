import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withClamp, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'


const AppDemoShareValue = () => {
  const offset = useSharedValue(0);

  const animateStyle = useAnimatedStyle(() => {
    return { transform: [{translateY:offset.value}] }
  })

  const moveBox = () => {
    const randomPosition = Math.floor(Math.random() * 300); // Random vị trí trong khoảng 0 đến 300
    offset.value = withTiming(randomPosition, {
      duration: 1000,  
      easing: Easing.inOut(Easing.ease),  
    });
  };

  return (
    <View style={styles.container}>
       <Button title="Move" onPress={moveBox} />
      <Animated.View style={[styles.box, animateStyle]} />
    </View>
  )
}

export default AppDemoShareValue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
  },
})