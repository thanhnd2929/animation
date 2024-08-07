import React, { useRef, useEffect, memo } from 'react';
import { Animated, FlatList, View, Text, StyleSheet } from 'react-native';

const AnimatedFlatList = ({ data }) => {
  const viewableItems = useRef([]);
  const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

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
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={({viewableItems:vItems})=>{
        viewableItems.value=vItems;
      }}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default memo(AnimatedFlatList);
