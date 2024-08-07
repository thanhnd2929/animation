import React, { useRef, useEffect, memo } from 'react';
import { Animated, FlatList, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  { id: '11', title: 'Item 11' },
  { id: '12', title: 'Item 12' },
  { id: '13', title: 'Item 13' },
  { id: '14', title: 'Item 14' },
  { id: '15', title: 'Item 15' },
  { id: '16', title: 'Item 16' },
  { id: '17', title: 'Item 17' },
  { id: '18', title: 'Item 18' },
  { id: '19', title: 'Item 19' },
  { id: '20', title: 'Item 20' },
];

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
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};
 
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedFlatList data={DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },  item: {
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

export default App;
