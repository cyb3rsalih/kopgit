import React, { useEffect } from 'react';
import { View } from 'react-native';
import Loading from '../components/Loading';

const ScreenContainer = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;

export default (Splash = () => (
	<ScreenContainer>
		<Loading />
	</ScreenContainer>
));
