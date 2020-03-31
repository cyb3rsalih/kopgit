import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

MyTasksScreen = () => {

    return (
        <View style={styles.container} >
            <Text>MyTasks Screen</Text>
        </View>
    )
}

export default MyTasksScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})