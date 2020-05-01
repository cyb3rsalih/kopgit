import React from 'react';
import axios from 'axios';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../components/imageOverlay';
import { EyeIcon, EyeOffIcon, PersonIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';
import { connect } from 'react-redux';
import { userTokenInit, userLogin } from '../redux/actions/dataAction';
import AsyncStorage from '@react-native-community/async-storage';

Login = (props) => {
	console.log(props);
	const [ email, setEmail ] = React.useState();
	const [ password, setPassword ] = React.useState();
	const [ passwordVisible, setPasswordVisible ] = React.useState(false);
	const { navigation, data, dispatch } = props;

	const onSignInButtonPress = async () => {
		try {
			const url = 'https://kopgitapi.atalayemrah.com/api/Auth/Login';
			const response = await axios({
				url,
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				data: {
					email,
					password
				}
			});

			const loginData = response.data;
			dispatch(userLogin(loginData));
			storeData = async () => {
				try {
					await AsyncStorage.setItem('token', loginData.token);
				} catch (e) {
					console.log(e);
				}
			};
		} catch (error) {
			console.log(error);
		}
	};

	const onSignUpButtonPress = () => {
		navigation && navigation.navigate('Register');
	};

	const onForgotPasswordButtonPress = () => {
		navigation && navigation.navigate('ForgotPassword');
	};

	const onPasswordIconPress = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<KeyboardAvoidingView>
			<ImageOverlay style={styles.container} source={require('../assets/login-background.jpg')}>
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
			</ImageOverlay>
		</KeyboardAvoidingView>
	);
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = () => {
	return {
		userLogin
	};
};

export default connect(mapStateToProps)(Login);

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
