import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/screeens/LoginScreen';
import { MainCard } from './src/components/cards';
const App = (props) => {
	return (
		<SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
			<LoginScreen />
		</SafeAreaView>
	);
};

export default App;
