import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
    return (
        <View style={styles.container}>
            <Text>Screen1</Text>
            <Button
                title='go to Screen 2'
                onPress={() => props.navigation.navigate('Screen2')} />
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    }
})