import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'


const AppDemoShareValue = () => {
  const _width = useSharedValue(100);

  const animateStyle = useAnimatedStyle(() => {
    return { width: _width.value }
  })

  const handleChangeSize = () => {
    //Sử dụng hiệu ứng thay đổi kích thước k có hiệu ứng 
    // _width.value = 200;
    //Sử dụng hiệu ứng thay đổi kích thước có hiệu ứng 
    // _width.value = withSpring(_width.value == 100 ? 300 : 100);
    //Sử dụng hiệu ứng thời gian

  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.vidu, animateStyle]} />
      {/* </Animated.View> */}
      {/* <View style={[styles.vidu, animateStyle]} />  */}

      <Button title='Change size' onPress={handleChangeSize} />
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