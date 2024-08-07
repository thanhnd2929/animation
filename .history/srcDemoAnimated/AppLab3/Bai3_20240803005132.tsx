import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai3 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                <Text style={{fontWeight:'bold',fontSize:16}}>Welcome Chao Lao Lo</Text>
                <Image source={require('./image/image.png')} style={{width:100,height:100,borderRadius:20}}/>
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
        backgroundColor: 'lightblue',
        padding:20
    },
    flatlistContainer: {

    }
})