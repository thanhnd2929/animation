import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai3 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Welcome Chao Lao Lo</Text>
                    <Image source={require('./image/image.png')} style={{ width: 80, height: 80, borderRadius: 20 }} />
                    <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Chao Lao Lo!</Text>
                    <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Ready for a quiz?</Text>
                    <ScrollView horizontal={true}>
                        <Text style={{marginHorizontal:10,padding:10,fontSize:18,color:'black',backgroundColor:'gray'}}>Popular</Text>
                        <Text>Product Design</Text>
                        <Text>Deployment</Text>
                        <Text>People</Text>
                        <Text>sport</Text>
                    </ScrollView>
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
        padding: 20
    },
    flatlistContainer: {

    }
})