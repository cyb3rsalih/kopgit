import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FeatherIcon from 'react-native-vector-icons/Feather';
const MainCard = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View style={styles.contentContainer}>
					<Text style={styles.contentText}>
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Loremsdsd ipsum Lorem ipsum Lorem ipsum Lorem
						ipsumss Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					</Text>
					<View style={styles.contentBottomContainer}>
						<Text style={styles.pointText}>+15 Puan</Text>
						<TouchableOpacity style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Ödül Göster</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.rightContainer}>
					<FeatherIcon name="check-circle" style={styles.iconStyle} />
				</View>
			</View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>1. Görev</Text>
			</View>
		</View>
	);
};

export { MainCard };

const styles = StyleSheet.create({
	container: {
		width: wp('90%'),
		minHeight: hp('20%'),
		marginBottom: hp('3%')
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	contentContainer: {
		flex: 9,
		backgroundColor: '#f5f5f5',
		borderWidth: 1,
		borderColor: '#3BB195',
		borderBottomLeftRadius: hp('2%'),
		borderTopLeftRadius: hp('2%')
	},
	contentBottomContainer: {
		flex: 3,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: wp('2%'),
		paddingRight: wp('2%')
	},
	contentText: {
		padding: hp('1%'),
		flex: 6,
		marginTop: hp('2%')
	},
	pointText: {
		color: '#3BB195'
	},
	buttonContainer: {
		width: wp('25%'),
		backgroundColor: '#3BB195',
		alignItems: 'center',
		padding: hp('0.7%'),
		borderRadius: hp('3%')
	},
	buttonText: {
		color: '#fff'
	},
	rightContainer: {
		flex: 1,
		backgroundColor: '#3BB195',
		borderTopRightRadius: hp('2%'),
		borderBottomRightRadius: hp('2%'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconStyle: {
		color: '#fff',
		fontSize: hp('3%')
	},
	headerContainer: {
		width: wp('40%'),
		height: hp('5%'),
		position: 'absolute',
		marginLeft: wp('5%'),
		marginTop: hp('-2.5%'),
		borderWidth: 1,
		borderColor: '#3BB195',
		borderRadius: hp('2.5%'),
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		fontSize: hp('2.2%'),
		color: '#3BB195'
	}
});
