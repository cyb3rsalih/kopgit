import React from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, Layout, Divider, List, ListItem } from '@ui-kitten/components';
import { connect } from 'react-redux';

DashboardScreen = (props) => {
	React.useEffect(() => {
		//navigation.setOptions({ title: 'Updated!' })
	}, []);

	const { userInfos } = props.state.data;

	const renderItem = ({ item, index }) => <ListItem title={item.firstName} />;
	return (
		<React.Fragment>
			<List data={userInfos} ItemSeparatorComponent={Divider} renderItem={renderItem} />

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
