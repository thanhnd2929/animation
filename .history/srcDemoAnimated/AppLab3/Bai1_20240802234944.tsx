import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withClamp, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'


const AppDemoShareValue = () => {
  const offset = useSharedValue(100);

  const animateStyle = useAnimatedStyle(() => {
    return { transform: [{translateY:offset.value}] }
  })


  return (
    <View style={styles.container}>
      <Button title='Change size'  />
      <Animated.View style={[styles.vidu, animateStyle]} />
    </View>
  )
}

export default AppDemoShareValue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vidu: {
    height: 100,
    backgroundColor: 'lightblue'
  }
})