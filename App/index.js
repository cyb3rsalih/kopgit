import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './config/navigation';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { Provider as Redux } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			<Redux store={store}>
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</Redux>
		</ApplicationProvider>
	);
}

export default App;

