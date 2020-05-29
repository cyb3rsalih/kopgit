import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { connect } from 'react-redux';

import {

	PacmanIndicator,

  } from 'react-native-indicators';
import { setUserToken } from '../redux/actions/dataAction';
import AsyncStorage from '@react-native-community/async-storage';

LogoutScreen = (props) => {
	const {dispatch,data} = props
	React.useEffect(() => {
		dispatch(setUserToken(null))
		AsyncStorage.clear()
	}, []);

	return (
		<React.Fragment>
			<Layout style={styles.container}>
				<Text style={styles.text}>Çıkış Yapılıyor...</Text>
			</Layout>
			<Layout style={{height:100}}>
			<PacmanIndicator color='#f0f' />
			</Layout>
				
			</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		state
	};
};

export default connect(mapStateToProps)(LogoutScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
	text:{
		fontSize:40,
		lineHeight:50,
		
	}
});
