import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './config/navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light, dark } from '@eva-design/eva';
import { ThemeContext } from './config/theme-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider as Redux } from 'react-redux';
import store from './redux/store';
import { StatusBar } from 'react-native';

const themes = { light, dark };

function App() {

	const [theme, setTheme] = React.useState('light');
	const currentTheme = themes[theme];

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};

	return (
		<React.Fragment>
			<IconRegistry icons={EvaIconsPack} />
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<ApplicationProvider mapping={mapping} theme={currentTheme}>
					<Redux store={store}>
						<SafeAreaProvider>
							<NavigationContainer>
								<StatusBar barStyle='light-content' />
								<AppNavigator />
							</NavigationContainer>
						</SafeAreaProvider>
					</Redux>
				</ApplicationProvider>
			</ThemeContext.Provider>
		</React.Fragment>
	);
}

export default App;

