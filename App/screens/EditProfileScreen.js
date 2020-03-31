import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

EditProfileScreen = () => {

    return (
        <View style={styles.container} >
            <Text>Edit Profile Screen</Text>
        </View>
    )
}

export default EditProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})