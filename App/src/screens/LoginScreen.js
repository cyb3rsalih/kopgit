import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'native-base';
import { LoginInput } from '../components/inputs';
import { LoginButtons } from '../components/buttons';
import LG from 'react-native-linear-gradient';
import { KeyboardAvoidingView } from '../components/extra';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { setUserToken } from '../../redux/actions/dataAction'

import { connect } from 'react-redux'

const LoginScreen = ({ navigation, data, dispatch }) => {

	handleLogin = () => {
		dispatch(setUserToken('token123'));
	};

	// Add Login, Register, Forgot Password Navigations


	return (
		<LG start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#ECE9E6', '#FFFFFF']} style={styles.container}>
			<KeyboardAvoidingView contentContainerStyle={styles.keyboard}>
				<View style={styles.imageContainer}>
					<Image source={require('../assets/kopgitLogo.png')} style={styles.image} />
				</View>
				<View style={styles.textHeader}>
					<Text style={styles.textTitle}>Risale-i Nur</Text>
					<Text style={styles.textSub}>Yaratan Rabbi'nin adıyla oku. (Alak:1)</Text>
				</View>
				<View style={styles.inputsContainer}>
					<LoginInput placeholder={'E-Posta'} />
					<LoginInput placeholder={'Şifre'} />
				</View>

				<View style={{ flexDirection: 'row', marginBottom: hp('5%'), padding: hp('2%') }}>
					<View
						style={{
							flexDirection: 'row',
							width: wp('40%'),
							paddingLeft: 5
						}}
					>
						<CheckBox />
						<Text style={{ paddingLeft: 20 }}>Beni hatırla</Text>
					</View>
					<View style={{ width: wp('40%'), flexDirection: 'row', justifyContent: 'flex-end' }}>
						<Text>Şifremi unuttum?</Text>
					</View>
				</View>
				<View style={styles.buttonsContainer}>
					<LoginButtons
						lgColors={['#3C3B3F', '#605C3C']}
						btnText={'Giriş'}
						btnOnPress={handleLogin}
					/>
				</View>
				<View style={{ flexDirection: 'row', paddingTop: hp('1%') }}>
					<Text style={{ marginRight: 3 }}>Bir hesabın yok mu?</Text>
					<Text style={{ color: '#0575E6' }}>Kayıt Ol</Text>
				</View>
			</KeyboardAvoidingView>
		</LG>
	);
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
	container: {
		flex: 10
	},
	keyboard: {
		height: hp('100%'),
		alignItems: 'center'
	},
	imageContainer: {
		height: hp('30%'),
		justifyContent: 'flex-end'
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'center'
	},
	textHeader: {
		height: hp('20%'),
		alignItems: 'center'
	},
	textTitle: {
		color: '#717171',
		fontSize: hp('4%')
	},
	textSub: {
		color: '#717171',
		fontSize: hp('2%')
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
