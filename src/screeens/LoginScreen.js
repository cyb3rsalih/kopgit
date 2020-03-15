import React from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LoginInput } from '../components/inputs';
import { LoginButtons } from '../components/buttons';
import LG from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = (props) => {
	return (
		<LG start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[ '#42661D', '#6E9F39' ]} style={styles.container}>
			<View behavior="padding" style={styles.keyboard}>
				<View style={styles.imageContainer}>
					<Image source={require('../assets/kopgitLogo.png')} style={styles.image} />
				</View>
				<View style={styles.textHeader}>
					<Text style={styles.textTitle}>Risale-i Nur</Text>
					<Text style={styles.textSub}>Yaratan Rabbi'nin adıyla oku. (Alak:1)</Text>
				</View>
				<KeyboardAvoidingView style={{ flex: 6 }}>
					<View style={styles.inputsContainer}>
						<LoginInput placeholder={'E-Posta'} />
						<LoginInput placeholder={'Şifre'} />
					</View>
					<View style={styles.buttonsContainer}>
						<LoginButtons
							lgColors={[ '#e43a15', '#e65245' ]}
							btnText={'Giriş'}
							btnOnPress={() => alert('Giriş')}
						/>
						<LoginButtons
							lgColors={[ '#4b6cb7', '#182848' ]}
							btnText={'Kayıt Ol'}
							btnOnPress={() => alert('Kayıt Ol')}
						/>
					</View>
				</KeyboardAvoidingView>
			</View>
		</LG>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 10,
		flexDirection: 'row'
	},
	keyboard: {
		flex: 10,
		alignItems: 'center'
	},
	imageContainer: {
		flex: 2,
		justifyContent: 'flex-end'
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'center'
	},
	textHeader: {
		flex: 1,
		alignItems: 'center'
	},
	textTitle: {
		color: '#fff',
		fontSize: hp('4%')
	},
	textSub: {
		color: '#fff',
		fontSize: hp('2%')
	},
	inputsContainer: {
		flex: 2,
		justifyContent: 'center'
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	}
});
export default LoginScreen;
