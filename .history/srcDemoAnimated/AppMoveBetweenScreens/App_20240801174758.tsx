import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Screen1'
                screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})