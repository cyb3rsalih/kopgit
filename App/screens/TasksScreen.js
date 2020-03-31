import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

TasksScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Tasks Screen</Text>
        </View>
    )
}

export default TasksScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})