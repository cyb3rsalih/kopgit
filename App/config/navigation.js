import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainScreen from '../screens/MainScreen'; // Kalkacak
import Splash from '../screens/Splash'

import Register from '../screens/Register';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import DashboardScreen from '../screens/DashboardScreen'
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
 * 
 * OPTİONS
 * * Options
*/
const Support = createStackNavigator();
const SupportNavigator = () => {
    <Support.Navigator>
        <Support.Screen name={'Yeni Soru'} component={MainScreen} />
        <Support.Screen name={'Sorularım'} component={MainScreen} />
        <Support.Screen name={'Sıkça Sorulan Sorular'} component={MainScreen} />
    </Support.Navigator>
}

const Report = createStackNavigator();
const ReportNavigator = () => {
    <Report.Navigator>
        <Report.Screen name={'Geçmiş Raporlar'} component={MainScreen} />
        <Report.Screen name={'Yeni Rapor Girişi'} component={MainScreen} />
    </Report.Navigator>
}

const Tasks = createStackNavigator();
const TasksNavigator = () => (
    <Tasks.Navigator>
        <Tasks.Screen name={'Görevlerim'} component={MainScreen} />
        <Tasks.Screen name={'Görev'} component={MainScreen} />
        <Tasks.Screen name={'Ödül'} component={MainScreen} />
    </Tasks.Navigator>
)

const Profile = createStackNavigator();
const ProfileNavigator = () => (
    <Profile.Navigator>
        <Profile.Screen name={'Profil'} component={MainScreen} />
        <Profile.Screen name={'Edit Profile'} component={MainScreen} />
        <Profile.Screen name={'Change Password'} component={MainScreen} />
    </Profile.Navigator>
)

const Dashboard = createStackNavigator();
const DashboardNavigator = () => (
    <Dashboard.Navigator>
        <Dashboard.Screen name={'Anasayfa'} component={DashboardScreen} />
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
        <Options.Screen name="Ayarlar" component={MainScreen} />
    </Options.Navigator>
)

const Drawer = createDrawerNavigator();
const MainNavigator = () => (
    <Drawer.Navigator headerMode="none">
        <Drawer.Screen name="Report" component={TabNavigator} />
        <Drawer.Screen name="Options" component={OptionsNavigator} />
    </Drawer.Navigator>
);

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
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
