import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

FAQScreen = () => {

    return (
        <View style={styles.container} >
            <Text>FAQ Screen</Text>
        </View>
    )
}

export default FAQScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})