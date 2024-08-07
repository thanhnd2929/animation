import { Animated, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

const Bai2 = () => {
    const viewableItems = useRef([]);
    const animatedValues = useRef(DATA.map(() => new Animated.Value(0))).current;
  
    const handleViewableItemsChanged = ({ viewableItems: visibleItems }) => {
      viewableItems.current = visibleItems;
  
      visibleItems.forEach(({ item, index }) => {
        Animated.timing(animatedValues[index], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    };
  
    const viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
    };
  
    const renderItem = ({ item, index }) => {
      const isVisible = animatedValues[index];
  
      const opacity = isVisible.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
  
      const scale = isVisible.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1],
      });
  
      return (
        <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
          <Text>{item.title}</Text>
        </Animated.View>
      );
    };


  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  </SafeAreaView>
  )
}

export default Bai2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
})