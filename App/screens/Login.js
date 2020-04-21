import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../components/imageOverlay';
import { EyeIcon, EyeOffIcon, PersonIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';
import { connect } from 'react-redux';
import { userTokenInit } from '../redux/actions/dataAction';

Login = ({ navigation, data, dispatch }) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const onSignInButtonPress = async () => {
        //navigation && navigation.goBack();
        //navigation && navigation.navigate('Profile');
        dispatch(userTokenInit('token123'));

        // Redux training
        // try {
        //   res = await dispatch(heloRedux());
        // } catch (e) {
        //   alert(e);
        // }
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
            <ImageOverlay
                style={styles.container}
                source={require('../assets/login-background.jpg')}>
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
                            onPress={onForgotPasswordButtonPress}>
                            Parolamı Unuttum
            </Button>
                    </View>
                </View>
                <Button
                    style={styles.signInButton}
                    status="control"
                    size="giant"
                    onPress={onSignInButtonPress}>
                    GİRİŞ YAP
        </Button>
                <Button
                    style={styles.signUpButton}
                    appearance="ghost"
                    status="control"
                    onPress={onSignUpButtonPress}>
                    Hesabın yok mu? Kayıt Ol
        </Button>
            </ImageOverlay>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
    },
    formContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 16,
    },
    signInLabel: {
        marginTop: 16,
    },
    signInButton: {
        marginHorizontal: 16,
    },
    signUpButton: {
        marginVertical: 12,
        marginHorizontal: 16,
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passwordInput: {
        marginTop: 16,
    },
    forgotPasswordButton: {
        paddingHorizontal: 0,
    },
});