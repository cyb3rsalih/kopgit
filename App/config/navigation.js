import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../src/screeens/LoginScreen';
import MainScreen from '../src/screeens/MainScreen';

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            <RootStack.Screen name={'App'} component={MainScreen} />
        ) : (
                <RootStack.Screen
                    name={'Auth'}
                    component={AuthNavigator}
                    options={{
                        animationEnabled: false,
                    }}
                />
            )}
    </RootStack.Navigator>
);

const AppNavigator = (props) => {
    return <RootStackScreen userToken={true} />;
};

export default AppNavigator
