import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListCard = (props) => {
	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'First Item'
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Second Item'
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Third Item'
		}
	];
	function Item({ title }) {
		return (
			<View style={styles.item}>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity>
					<Ionicons name="logo-youtube" style={{ fontSize: hp('3%'), color: 'red' }} />
				</TouchableOpacity>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Header</Text>
			</View>
			<SafeAreaView>
				<FlatList
					data={DATA}
					renderItem={({ item }) => <Item title={item.title} />}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
};

export { ListCard };

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
	},
	item: {
		padding: hp('2%'),
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});
