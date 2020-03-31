import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text, Layout } from '@ui-kitten/components';

DashboardScreen = () => {

    return (
        <Layout style={styles.container}>
            <Text>AT</Text>
        </Layout>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})