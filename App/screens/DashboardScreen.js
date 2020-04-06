import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Button, Input, Text, Layout, TopNavigation,
    TopNavigationAction, Icon
} from '@ui-kitten/components';



DashboardScreen = ({ navigation }) => {

    return (
        <React.Fragment>
            <Layout>
            </Layout>
            <Layout style={styles.container}>
                <Text>AT</Text>
            </Layout>
        </React.Fragment>
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