import React from 'react';
import { View } from 'react-native';
import { MainCard } from '../components/cards';

const MainScreen = (props) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<MainCard />
		</View>
	);
};

export default MainScreen;
