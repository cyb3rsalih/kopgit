import React from 'react';
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
        <Dashboard.Screen name={'Anasayfa'} component={MainScreen} />
    </Dashboard.Navigator>
)

const Tabs = createBottomTabNavigator();
const TabNavigator = () => (
    <Tabs.Navigator>
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
const MainNavigator = () => (
    <Drawer.Navigator headerMode="none">
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
