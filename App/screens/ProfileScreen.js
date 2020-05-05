import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';

ProfileScreen = () => {
	return (
		<React.Fragment>
			<Layout style={styles.container}>
				<Text>Profile Screen</Text>
			</Layout>
		</React.Fragment>
	);
};

export default ProfileScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
