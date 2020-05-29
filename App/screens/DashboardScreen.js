import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { connect } from 'react-redux';

DashboardScreen = (props) => {
	React.useEffect(() => {
		//navigation.setOptions({ title: 'Updated!' })
	}, []);

	return (
		<React.Fragment>
			<Layout style={styles.container}>
				<Text>AT</Text>
			</Layout>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		state
	};
};

export default connect(mapStateToProps)(DashboardScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
