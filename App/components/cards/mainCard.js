import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MainCard = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Header</Text>
			</View>
			<View>
				<Text style={styles.contentText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat blanditiis minima explicabo! Iure dignissimos ut asperiores maxime nostrum praesentium aut ducimus dolorem ipsa magnam,
					rerum ad, enim nemo nulla incidunt.
				</Text>
			</View>
		</View>
	);
};

export { MainCard };

const styles = StyleSheet.create({
	container: {
		width: wp('90%'),
		minHeight: hp('20%'),
		marginBottom: hp('3%'),
		backgroundColor: '#f5f5f5',
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 1,
		elevation: 5
	},
	headerContainer: {
		padding: hp('1.5%'),
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		backgroundColor: '#0575E6'
	},
	headerText: {
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		color: '#f5f5f5'
	},
	contentText: {
		fontSize: hp('2%'),
		padding: hp('2%'),
		color: '#717171'
	}
});
