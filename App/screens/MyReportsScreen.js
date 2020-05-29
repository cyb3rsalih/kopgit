import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

MyReportsScreen = () => {
	return (
		<Layout style={styles.container}>
			<Layout />
		</Layout>
	);
};

export default MyReportsScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
