import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

RewardScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Reward Screen</Text>
        </View>
    )
}

export default RewardScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})