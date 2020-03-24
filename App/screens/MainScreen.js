import React from 'react';
import { StyleSheet, Text, View, ScrollView, YellowBox } from 'react-native';
import { MainCard, ListCard } from '../components/cards';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MainScreen = (props) => {
	YellowBox.ignoreWarnings([
		'VirtualizedLists should never be nested' // TODO: Remove when fixed
	]);
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollStyle}>
				<ListCard />
				<ListCard />
			</ScrollView>
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollStyle: {
		alignItems: 'center',
		paddingTop: hp('2%')
	}
});
