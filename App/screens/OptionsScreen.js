import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

OptionsScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Options Screen</Text>
        </View>
    )
}

export default OptionsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})