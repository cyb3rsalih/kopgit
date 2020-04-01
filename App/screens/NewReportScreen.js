import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

NewReportScreen = () => {

    return (
        <View style={styles.container} >
            <Text>NewReport Screen</Text>
        </View>
    )
}

export default NewReportScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})