import React from 'react'
import {
    Button, Icon, Layout
} from '@ui-kitten/components';
import { ThemeContext } from '../config/theme-context';
import { useNavigation } from '@react-navigation/native';


const stackStyles = ({ title }) => {
    const themeContext = React.useContext(ThemeContext);
    const navigation = useNavigation()
    const iconProps = {
        width: 30, height: 30, tintColor: themeContext.theme == 'dark' ? '#fff' : '#000', marginHorizontal: 10
    }
    styles = {
        title,

        headerStyle: {
            backgroundColor: themeContext.theme == 'dark' ? '#000' : '#fff',
        },
        headerTintColor: themeContext.theme == 'dark' ? '#fff' : '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <Icon {...iconProps} onPress={() => navigation.toggleDrawer()} name="menu-outline"></Icon>
        ),
        headerLeft: () => (
            <Icon {...iconProps} onPress={() => navigation.goBack()} name="arrow-back-outline"></Icon>

        ),
    }

    return styles
}

export { stackStyles }