import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

MyReportsScreen = () => {

    return (
        <View style={styles.container} >
            <Text>MyReports Screen</Text>
        </View>
    )
}

export default MyReportsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})