import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChoiceScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Bai1')} style={styles.pressContainer}>
                <Text style={styles.pressTitle}>Bài 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Bai2')} style={styles.pressContainer}>
                <Text style={styles.pressTitle}>Bài 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Bai3')} style={styles.pressContainer}>
                <Text style={styles.pressTitle}>Bài 3</Text>
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
        backgroundColor: '#0000FF',
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 10,
        borderRadius:10,
    },
    pressTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }
})