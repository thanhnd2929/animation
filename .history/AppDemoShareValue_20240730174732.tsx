// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


// const AppDemoShareValue = () => {
//   const _width = useSharedValue(100);

//   const animateStyle = useAnimatedStyle(() => {
//     return { width: _width.value }
//   })

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.vidu, animateStyle]} />
//       {/* </Animated.View> */}
//       <View style={[styles.vidu, animateStyle]} />
//     </View>
//   )
// }

// export default AppDemoShareValue

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   vidu: {
//     height: 100,
//     backgroundColor: 'lightblue'
//   }
// })