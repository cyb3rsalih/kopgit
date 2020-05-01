import React from 'react';
import { StyleSheet, Text, View, ScrollView, YellowBox, SafeAreaView } from 'react-native';
import { MainCard, ListCard } from '../components/cards';
import { Button, Layout, List } from '@ui-kitten/components';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ThemeContext } from '../config/theme-context';
import { connect } from 'react-redux';
import { setUserToken } from '../redux/actions/dataAction';

const MainScreen = (props) => {
	const { data, dispatch, navigation } = props;
	console.log(props);

	const themeContext = React.useContext(ThemeContext);

	const navigateDetails = () => {
		navigation.navigate('Details');
	};

	const logout = () => {
		dispatch(setUserToken(null));
	};

	const at = [ 1, 2 ];

	return (
		<ScrollView contentContainerStyle={styles.scrollStyle}>
			<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{at.map((x, index) => {
					return <ListCard key={index} />;
				})}
				<Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
					Tema Değiştir
				</Button>
				<Button style={{ marginVertical: 4 }} onPress={logout}>
					Çıkış Yap
				</Button>
			</Layout>
		</ScrollView>
	);
};
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(MainScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollStyle: {
		height: hp('100%'),
		width: wp('100%'),
		alignItems: 'center',
		paddingTop: hp('5%')
	}
});
