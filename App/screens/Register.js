import React from 'react';
import { View } from 'react-native';
import {
    Button,
    CheckBox,
    Datepicker,
    Divider,
    Input,
    StyleService,
    Text,
    useStyleSheet,
} from '@ui-kitten/components';
import { ImageOverlay } from '../components/imageOverlay';
import {
    ArrowForwardIconOutline,
    FacebookIcon,
    GoogleIcon,
    HeartIconFill,
    TwitterIcon,
} from '../components/icons';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';

Register = ({ navigation }) => {
    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [dob, setDob] = React.useState();
    const [termsAccepted, setTermsAccepted] = React.useState(false);

    const styles = useStyleSheet(themedStyles);

    const onSignUpButtonPress = () => {
        navigation.goBack();
    };

    const onSignInButtonPress = () => {
        navigation.navigate('Login');
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageOverlay
                style={styles.headerContainer}
                source={require('../assets/register-background.jpg')}>
                <Button
                    style={styles.evaButton}
                    appearance="ghost"
                    status="control"
                    size="large"
                    icon={HeartIconFill}>
                    Kayıt
        </Button>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signInLabel} category="h4" status="control">
                        KOPGİT
          </Text>
                    <Button
                        style={styles.signInButton}
                        appearance="ghost"
                        status="control"
                        size="giant"
                        icon={ArrowForwardIconOutline}
                        onPress={onSignInButtonPress}>
                        Giriş Yap
          </Button>
                </View>
            </ImageOverlay>
            <Text category="h5" style={styles.emailSignLabel}>
                Email ile kayıt ol
      </Text>
            <View style={[styles.container, styles.formContainer]}>
                <Input
                    placeholder="Ahmet"
                    label="AD"
                    autoCapitalize="words"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <Input
                    style={styles.formInput}
                    placeholder="Demir"
                    label="SOYAD"
                    autoCapitalize="words"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <Datepicker
                    style={styles.formInput}
                    placeholder="18/10/1995"
                    label="Doğum Tarihi"
                    date={dob}
                    onSelect={setDob}
                />
                <Input
                    style={styles.formInput}
                    placeholder="alidemir@gmail.com"
                    label="EMAIL"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    style={styles.formInput}
                    label="PAROLA"
                    placeholder="Parola"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <CheckBox
                    style={styles.termsCheckBox}
                    textStyle={styles.termsCheckBoxText}
                    checked={termsAccepted}
                    text={
                        'Kayıt olarak bilgilerimin KVKK kapsamında\nkayıt altına alınmasını kabul ediyorum.'
                    }
                    onChange={checked => setTermsAccepted(checked)}
                />
            </View>
            <Button
                style={styles.signUpButton}
                size="large"
                onPress={onSignUpButtonPress}>
                SIGN UP
      </Button>
        </KeyboardAvoidingView>
    );
};

export default Register;

const themedStyles = StyleService.create({
    container: {
        backgroundColor: 'background-basic-color-1',
    },
    headerContainer: {
        minHeight: 216,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 44,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    socialAuthContainer: {
        marginTop: 24,
    },
    socialAuthButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialAuthHintText: {
        alignSelf: 'center',
        marginBottom: 16,
    },
    formContainer: {
        marginTop: 48,
        paddingHorizontal: 16,
    },
    evaButton: {
        maxWidth: 72,
        paddingHorizontal: 0,
    },
    signInLabel: {
        flex: 1,
    },
    signInButton: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    signUpButton: {
        marginVertical: 24,
        marginHorizontal: 16,
    },
    socialAuthIcon: {
        tintColor: 'text-basic-color',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 52,
    },
    divider: {
        flex: 1,
    },
    orLabel: {
        marginHorizontal: 8,
    },
    emailSignLabel: {
        alignSelf: 'center',
        marginTop: 8,
    },
    formInput: {
        marginTop: 16,
    },
    termsCheckBox: {
        marginTop: 20,
    },
    termsCheckBoxText: {
        fontSize: 11,
        lineHeight: 14,
        color: 'text-hint-color',
    },
});
