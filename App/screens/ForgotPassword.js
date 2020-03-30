import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../components/imageOverlay';
import { EmailIcon } from '../components/icons';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';
import LG from 'react-native-linear-gradient';

ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState();

    const onResetPasswordButtonPress = () => {
        navigation.goBack();
    };
    gradientColorStyles = ["#555555", "#000000"]

    return (
        <KeyboardAvoidingView>
            <LG style={styles.container} colors={gradientColorStyles}>
                <Text style={styles.forgotPasswordLabel} category="h4" status="control">
                    Parolamı Unuttum
        </Text>
                <Text style={styles.enterEmailLabel} status="control">
                    Lütfen email adresinizi girin
        </Text>
                <View style={styles.formContainer}>
                    <Input
                        status="control"
                        placeholder="Email"
                        icon={EmailIcon}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <Button size="giant" onPress={onResetPasswordButtonPress}>
                    PAROLAMI SIFIRLA
        </Button>
            </LG>
        </KeyboardAvoidingView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 24,
    },
    forgotPasswordLabel: {
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 24,
    },
    enterEmailLabel: {
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 64,
    },
});
