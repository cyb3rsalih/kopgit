import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Toggle } from '@ui-kitten/components';
import { Setting } from '../components/SettingSection';
import { ThemeContext } from '../config/theme-context';

OptionsScreen = ({ navigation, data, dispatch }) => {
    const themeContext = React.useContext(ThemeContext);

    return (
        <Layout style={styles.container}>
            <Setting
                style={styles.setting}
                hint='Bilgilerimi Düzenle'
                onPress={() => navigation.navigate('Profil')}
            />
            <Setting
                style={styles.setting}
                hint='Parola Değiştir'
            />
            <Setting
                style={[styles.setting, styles.section]}
                hint='Bildirim Ayarları'
            />
            <Setting
                style={styles.setting}
                hint='Hakkında ve KVKK'
            />
            <Setting
                style={[styles.setting, styles.section]}
                hint='Dark Mode'
                onPress={themeContext.toggleTheme}>
                <Toggle
                    checked={themeContext.theme == 'dark'}
                    onChange={themeContext.toggleTheme}
                />
            </Setting>
        </Layout>
    );
};

export default OptionsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    setting: {
        padding: 16,
    },
    section: {
        paddingTop: 32,
    },
});
