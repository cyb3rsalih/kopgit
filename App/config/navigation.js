import React from 'react';
import { SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainScreen from '../screens/MainScreen'; // Kalkacak
import Splash from '../screens/Splash'

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen'
import NewSupportRequestScreen from '../screens/NewSupportRequestScreen'
import MyQuestionsScreen from '../screens/MyQuestionsScreen'
import FAQScreen from '../screens/FAQScreen'

import MyReportsScreen from '../screens/MyReportsScreen'
import NewReportScreen from '../screens/NewReportScreen'

import MyTasksScreen from '../screens/MyTasksScreen'
import TasksScreen from '../screens/TasksScreen'
import RewardScreen from '../screens/RewardScreen'

import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'

import OptionsScreen from '../screens/OptionsScreen'

import { BottomNavigation, BottomNavigationTab, Drawer as UIKittenDrawer, Icon, DrawerHeaderFooter, Layout } from '@ui-kitten/components';

/** 
 * TODO SCREENS
 * 
 * SUPPORT
 * * NewSupportRequest
 * * MyQuestions
 * * FAQ
 *
 * REPORT
 * * MyReports
 * * NewReport
 * 
 * TASKS
 * * MyTasks
 * * Task
 * * Reward
 * 
 * PROFILE
 * * Profil
 * * EditProfile
 * * ChangePassword

*/
const Support = createStackNavigator();
const SupportNavigator = () => (

    <Support.Navigator>
        <Support.Screen name={'Yeni Soru'} component={NewSupportRequestScreen} />
        <Support.Screen name={'Sorularım'} component={MyQuestionsScreen} />
        <Support.Screen name={'Sıkça Sorulan Sorular'} component={FAQScreen} />
    </Support.Navigator>
)


const Report = createStackNavigator();
const ReportNavigator = () => (

    <Report.Navigator>
        <Report.Screen name={'Geçmiş Raporlar'} component={MyReportsScreen} />
        <Report.Screen name={'Yeni Rapor Girişi'} component={NewReportScreen} />
    </Report.Navigator>
)


const Tasks = createStackNavigator();
const TasksNavigator = () => (
    <Tasks.Navigator>
        <Tasks.Screen name={'Görevlerim'} component={MyTasksScreen} />
        <Tasks.Screen name={'Görev'} component={TasksScreen} />
        <Tasks.Screen name={'Ödül'} component={RewardScreen} />
    </Tasks.Navigator>
)

const Profile = createStackNavigator();
const ProfileNavigator = () => (
    <Profile.Navigator>
        <Profile.Screen name={'Profil'} component={ProfileScreen} />
        <Profile.Screen name={'Profil Düzenle'} component={EditProfileScreen} />
        <Profile.Screen name={'Parola Değiştir'} component={ChangePasswordScreen} />
    </Profile.Navigator>
)

const Dashboard = createStackNavigator();
const DashboardNavigator = () => (
    <Dashboard.Navigator>
        <Dashboard.Screen name={'Anasayfa'} component={DashboardScreen} />
    </Dashboard.Navigator>
)

const Tabs = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {

    const onSelect = (index) => {
        navigation.navigate(state.routeNames[index]);
    };

    return (
        <SafeAreaView>
            <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
                <BottomNavigationTab icon={props => (<Icon name="book-open" {...props} />)} title='Anasayfa' />
                <BottomNavigationTab icon={props => (<Icon name="person" {...props} />)} title='Profilim' />
                <BottomNavigationTab icon={props => (<Icon name="checkmark-square" {...props} />)} title='Görevlerim' />
                <BottomNavigationTab icon={props => (<Icon name="done-all" {...props} />)} title='Raporlarım' />
                <BottomNavigationTab icon={props => (<Icon name="paper-plane" {...props} />)} title='Sorularım' />
            </BottomNavigation>
        </SafeAreaView>
    );
};

const TabNavigator = () => (
    <Tabs.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tabs.Screen name={'Anasayfa'} component={DashboardNavigator} />
        <Tabs.Screen name={'Profilim'} component={ProfileNavigator} />
        <Tabs.Screen name={'Görevlerim'} component={TasksNavigator} />
        <Tabs.Screen name={'Raporlarım'} component={ReportNavigator} />
        <Tabs.Screen name={'Sorularım'} component={SupportNavigator} />
    </Tabs.Navigator>
);

const Options = createStackNavigator();
const OptionsNavigator = () => (
    <Options.Navigator>
        <Options.Screen name="Ayarlar" component={OptionsScreen} />
    </Options.Navigator>
)

const Drawer = createDrawerNavigator();

const Header = () => (
    <DrawerHeaderFooter
        title='Ahmet Ündemir'
        description='5.Seviye - Okuyucu'
        icon={props => (<Icon name="person" {...props} />)}
    />
);

const drawerData = [
    { title: 'Anasayfa' },
    { title: 'Sorularım' },
    { title: 'Görevlerim' },
    { title: 'Ayarlar' },
    { title: 'Raporlarım' },
    { title: 'Çıkış' },
];

const DrawerContent = ({ navigation, state }) => {

    const onSelect = (index) => {
        navigation.navigate(drawerData[index].title);
    };

    return (
        <Layout style={{ paddingTop: 30, flex: 1 }}>
            <UIKittenDrawer
                data={drawerData}
                header={Header}
                selectedIndex={state.index}
                onSelect={onSelect}
            />
        </Layout>
    );
};


const MainNavigator = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} headerMode="none">
        <Drawer.Screen name="Rapor" component={TabNavigator} />
        <Drawer.Screen name="Ayarlar" component={OptionsNavigator} />
    </Drawer.Navigator>
);

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Giriş" component={LoginScreen} />
        <AuthStack.Screen name="Kayıt" component={RegisterScreen} />
        <AuthStack.Screen name="Parolamı Unuttum" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            <RootStack.Screen name={'App'} component={MainNavigator} />
        ) : (
                <RootStack.Screen
                    name={'Auth'}
                    component={AuthNavigator}
                    options={{
                        animationEnabled: false,
                    }}
                />
            )}
    </RootStack.Navigator>
);

import { loading } from '../redux/actions/dataAction';
import { connect } from 'react-redux'

const AppNavigator = ({ data, dispatch }) => {
    React.useEffect(() => {
        setTimeout(() => {
            dispatch(loading(false));
        }, 500);
    }, []);

    if (data.isLoading) {
        return <Splash />;
    }

    return <RootStackScreen userToken={data.userToken} />;
};

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AppNavigator)
