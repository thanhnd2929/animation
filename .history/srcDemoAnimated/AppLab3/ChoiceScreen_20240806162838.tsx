import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChoiceScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.pressContainer}>
                <Text>Bài 1</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ChoiceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressContainer: {
        backgroundColor: 'lightgreen',
        padding: 10,
        margin: 10
    }
})