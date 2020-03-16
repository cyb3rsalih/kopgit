import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LG from 'react-native-linear-gradient';

const LoginButtons = (props) => {
	return (
		<TouchableOpacity style={props.touchStyle} onPress={props.btnOnPress}>
			<LG start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={props.lgColors} style={styles.linearStyle}>
				<Text style={styles.textStyle}>{props.btnText}</Text>
			</LG>
		</TouchableOpacity>
	);
};
LoginButtons.propTypes = {
	lgColors: PropTypes.array.isRequired,
	btnText: PropTypes.string.isRequired,
	touchStyle: PropTypes.object,
	btnOnPress: PropTypes.func.isRequired
};
const styles = StyleSheet.create({
	touchStyle: {
		height: 50
	},
	linearStyle: {
		margin: hp('1%'),
		width: wp('60%'),
		height: hp('7%'),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: hp('4%')
	},
	textStyle: {
		color: '#ffffff',
		fontSize: hp('2.4%')
	}
});
export { LoginButtons };
