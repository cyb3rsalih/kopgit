import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './config/navigation';

import { Provider as Redux } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Redux store={store}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</Redux>
	);
}

export default App;

