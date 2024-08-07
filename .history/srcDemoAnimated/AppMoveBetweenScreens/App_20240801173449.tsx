import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Screen1' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})