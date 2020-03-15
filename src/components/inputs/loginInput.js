import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const LoginInput = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Ionicons name="md-mail" style={styles.icon} />
			</View>
			<View style={styles.inputContainer}>
				<TextInput placeholder={props.placeholder} style={styles.input} placeholderTextColor="#ddd" />
			</View>
		</View>
	);
};

LoginInput.propTypes = {
	placeholder: PropTypes.string
};
const styles = StyleSheet.create({
	container: {
		width: wp('80%'),
		flexDirection: 'row',
		alignItems: 'center',
		margin: 5
	},
	iconContainer: {
		flex: 2,
		borderWidth: 1,
		borderColor: '#fff',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: hp('10%'),
		borderTopLeftRadius: hp('10%')
	},
	icon: {
		color: '#fff',
		fontSize: hp('3%')
	},
	inputContainer: {
		flex: 8,
		borderWidth: 1,
		borderColor: '#fff',
		height: 50,
		borderLeftWidth: 0,
		borderBottomRightRadius: hp('10%'),
		borderTopRightRadius: hp('10%')
	},
	input: {
		color: '#fff',
		fontSize: hp('2%'),
		paddingLeft: wp('2%')
	}
});
export { LoginInput };
