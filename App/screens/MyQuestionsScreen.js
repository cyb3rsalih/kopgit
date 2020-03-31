import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

MyQuestionsScreen = () => {

    return (
        <View style={styles.container} >
            <Text>MyQuestions Screen</Text>
        </View>
    )
}

export default MyQuestionsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})