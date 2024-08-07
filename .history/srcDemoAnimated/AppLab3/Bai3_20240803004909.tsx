import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai3 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                <Text>Welcom Chao Lao Lo</Text>
                </View>
                <View style={styles.flatlistContainer}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bai3

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 450,
        backgroundColor: 'lightgreen'
    },
    flatlistContainer: {

    }
})