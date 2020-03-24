import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './config/navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { Provider as Redux } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<React.Fragment>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<Redux store={store}>
					<NavigationContainer>
						<AppNavigator />
					</NavigationContainer>
				</Redux>
			</ApplicationProvider>
		</React.Fragment>
	);
}

export default App;

