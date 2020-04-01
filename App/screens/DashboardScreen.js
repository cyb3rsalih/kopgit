import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Button, Input, Text, Layout, TopNavigation,
    TopNavigationAction, Icon
} from '@ui-kitten/components';



const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
);

const EditIcon = (style) => (
    <Icon {...style} name='edit' />
);

const MenuIcon = (style) => (
    <Icon {...style} name='more-vertical' />
);

const BackAction = (props) => (
    <TopNavigationAction {...props} icon={BackIcon} />
);

const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon} />
);

const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon} />
);


DashboardScreen = () => {
    const onBackPress = () => {
    };

    const renderLeftControl = () => (
        <BackAction onPress={onBackPress} />
    );

    const renderRightControls = () => [
        <EditAction />,
        <MenuAction />,
    ];
    return (
        <React.Fragment>
            <Layout style={{ paddingTop: 20 }}>
                <TopNavigation
                    title='Application Title'
                    leftControl={renderLeftControl()}
                    rightControls={renderRightControls()}
                />
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