import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import Screen2 from './Screen2';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Screen1'
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: ({ current, layouts }) => (
                        {
                            // thuộc tính về hiệu ứng
                            cardStyle: {
                                opacity: current.progress, // Làm mờ
                                transform: [
                                    {
                                        translateX: current.progress.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [layouts.screen.width, 0]  //thu nhỏ về 0 từ kích thước của màn hình
                                        })
                                    },
                                    {
                                        scale: current.progress.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.5, 1]
                                        })
                                    }
                                ],

                            }
                        }
                    )
                }}>
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})