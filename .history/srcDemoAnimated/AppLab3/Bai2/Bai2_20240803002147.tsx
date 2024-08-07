import { SafeAreaView, StyleSheet } from "react-native";
import AnimatedFlatList from "./AnimatedFlatList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedFlatList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;