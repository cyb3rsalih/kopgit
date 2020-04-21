import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MissionCard = (props) => {
	return (
		<View style={[ styles.container, { backgroundColor: props.containerBackground } ]}>
			<Text style={{ fontSize: hp('2%') }}>{props.title}</Text>
			<TouchableOpacity
				onPress={props.onPress}
				style={{
					width: 130,
					height: 130,
					backgroundColor: props.backgroundColor,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 65
				}}
			>
				<View
					style={{
						width: 110,
						height: 110,
						backgroundColor: '#fff',
						borderRadius: 55,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Text style={{ fontSize: hp('3%') }}>1/10</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
MissionCard.propTypes = {
	title: PropTypes.string,
	backgroundColor: PropTypes.any,
	containerBackground: PropTypes.any,
	onPress: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		height: hp('25%'),
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: hp('1%')
	}
});

export { MissionCard };
