import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Input, Text } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon, PersonIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';
import { connect } from 'react-redux';
import { setUserToken, setUserProfileInfos } from '../redux/actions/dataAction';
import LG from 'react-native-linear-gradient';
import API from '../config/API';
import axios from 'axios';
import { loginUrl } from '../config/urls';

LoginScreen = ({ navigation, data, dispatch }) => {
	const [ email, setEmail ] = React.useState();
	const [ password, setPassword ] = React.useState();
	const [ passwordVisible, setPasswordVisible ] = React.useState(false);

	const onSignInButtonPress = async () => {
		const url = loginUrl;
		try {
			const response = await axios({
				method: 'post',
				url,
				data: {
					email,
					password
				}
			});
			const token = response.data.token;
			const userInfos = response.data.user;
			await AsyncStorage.setItem('@token', token);
			dispatch(setUserToken(token));
			dispatch(setUserProfileInfos(userInfos));
		} catch (error) {
			if (error) {
				console.log(error.response.data.errors);
				//TODO Dönen hata mesajları için modal eklenecek.
			}
		}
		//navigation && navigation.goBack();
		//navigation && navigation.navigate('Profile');

		// Redux training
		// try {
		//   res = await dispatch(heloRedux());
		// } catch (e) {
		//   alert(e);
		// }
	};

	const onSignUpButtonPress = () => {
		navigation && navigation.navigate('RegisterScreen');
	};

	const onForgotPasswordButtonPress = () => {
		navigation && navigation.navigate('ForgotPasswordScreen');
	};

	const onPasswordIconPress = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<KeyboardAvoidingView>
			<LG style={styles.container} colors={data.gradientColorStyles}>
				<View style={styles.headerContainer}>
					<Text category="h1" status="control">
						Kopgit
					</Text>
					<Text style={styles.signInLabel} category="s1" status="control">
						Giriş Yap
					</Text>
				</View>
				<View style={styles.formContainer}>
					<Input
						status="control"
						placeholder="Email"
						keyboardType="email-address"
						icon={PersonIcon}
						value={email}
						onChangeText={setEmail}
					/>
					<Input
						style={styles.passwordInput}
						status="control"
						placeholder="Parola"
						icon={passwordVisible ? EyeIcon : EyeOffIcon}
						value={password}
						secureTextEntry={!passwordVisible}
						onChangeText={setPassword}
						onIconPress={onPasswordIconPress}
					/>
					<View style={styles.forgotPasswordContainer}>
						<Button
							style={styles.forgotPasswordButton}
							appearance="ghost"
							status="control"
							onPress={onForgotPasswordButtonPress}
						>
							Parolamı Unuttum
						</Button>
					</View>
				</View>
				<Button style={styles.signInButton} status="control" size="giant" onPress={onSignInButtonPress}>
					GİRİŞ YAP
				</Button>
				<Button style={styles.signUpButton} appearance="ghost" status="control" onPress={onSignUpButtonPress}>
					Hesabın yok mu? Kayıt Ol
				</Button>
			</LG>
		</KeyboardAvoidingView>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 216
	},
	formContainer: {
		flex: 1,
		marginTop: 32,
		paddingHorizontal: 16
	},
	signInLabel: {
		marginTop: 16
	},
	signInButton: {
		marginHorizontal: 16
	},
	signUpButton: {
		marginVertical: 12,
		marginHorizontal: 16
	},
	forgotPasswordContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	passwordInput: {
		marginTop: 16
	},
	forgotPasswordButton: {
		paddingHorizontal: 0
	}
});
