import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

ProfileScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Profile Screen</Text>
        </View>
    )
}

export default ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})