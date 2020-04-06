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

TopNav = ({ title }) => {
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
        <TopNavigation
            title={title}
            leftControl={renderLeftControl()}
            rightControls={renderRightControls()}
        />
    )
}

export default TopNav
