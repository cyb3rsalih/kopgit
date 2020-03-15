import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/screeens/LoginScreen';
import MainScreen from './src/screeens/MainScreen';
const App = (props) => {
	return (
		<SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
			<MainScreen />
		</SafeAreaView>
	);
};

export default App;
