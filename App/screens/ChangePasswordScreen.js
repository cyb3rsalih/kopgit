import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

ChangePasswordScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Change Password Screen</Text>
        </View>
    )
}

export default ChangePasswordScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})