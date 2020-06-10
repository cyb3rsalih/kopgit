import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout,Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
DashboardScreen = (props) => {

	React.useEffect(() => {
		//navigation.setOptions({ title: 'Updated!' })		
	}, []);

	return (
			<Layout style={styles.container}>
			
				<Button size="small" status="danger" onPress={() => console.log(props.data)}>
					Redux Debug
				</Button>
				
			</Layout>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(DashboardScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});
