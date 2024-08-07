import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';

const App = () => {
  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})