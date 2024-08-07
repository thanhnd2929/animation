import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ChoiceScreen from './ChoiceScreen';
import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='ChoiceScreen'
        screenOptions={{
            headerShown: false,
            
        }}>
        <Stack.Screen name="ChoiceScreen" component={ChoiceScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})