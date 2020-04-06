import React from 'react'
import {
    Button
} from '@ui-kitten/components';

const stackStyles = (title) => {

    styles = {
        title,
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                color="#fff"
            >Geri</Button>
        ),
    }

    return styles
}

export { stackStyles }