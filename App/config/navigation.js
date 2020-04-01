import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen'; // Kalkacak
import Splash from '../screens/Splash';
import MissionScreen from '../screens/MissionScreen';

import Register from '../screens/Register';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
	<AuthStack.Navigator headerMode="none">
		<AuthStack.Screen name="Login" component={Login} />
		<AuthStack.Screen name="Register" component={Register} />
		<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
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
				component={MissionScreen}
				options={{
					animationEnabled: false
				}}
			/>
		)}
	</RootStack.Navigator>
);

import { loading } from '../redux/actions/dataAction';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(AppNavigator);
