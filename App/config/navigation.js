import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import Splash from '../screens/Splash'

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

import { loading } from '../redux/actions/dataAction';
import { connect } from 'react-redux'

const AppNavigator = ({ data, dispatch }) => {
    React.useEffect(() => {
        setTimeout(() => {
            dispatch(loading(false));
        }, 500);
    }, []);

    if (data.isLoading) {
        return <Splash />;
    }

    return <RootStackScreen userToken={data.userToken} />;
};

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AppNavigator)
