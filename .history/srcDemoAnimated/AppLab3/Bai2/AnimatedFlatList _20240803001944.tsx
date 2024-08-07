import React, { useRef } from 'react';
import { Animated, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';

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

const AnimatedFlatList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, 100 * index, 100 * (index + 2)];
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 1, 0],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.8, 0.8, 1, 0.8],
    });

    return (
      <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
        <Text>{item.title}</Text>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
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