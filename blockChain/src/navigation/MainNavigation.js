import React from 'react';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../Tools/View/TabBarIcon'
import Home from '../Home';

import Main from '../Main';

import Profile from '../Profile';

const HomeScreen = createStackNavigator({
    Home,

},{
    initialRouteName: 'Home'
})
HomeScreen.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      tabBarLabel: '主页',
      tabBarIcon: ({ focused,tintColor }) => (
        <TabBarIcon
          focused={focused}
          tintColor={tintColor}
          normalImage={require('../images/tabicon/tabbar_home.png')}
          selectedImage={require('../images/tabicon/tabbar_home_s.png')}
        />
      )
    }
  }

const MainScreen = createStackNavigator({
    Main,

},{
    initialRouteName: 'Main'
})
MainScreen.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      tabBarLabel: '社区',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
          focused={focused}
          tintColor={tintColor}
          normalImage={require('../images/tabicon/tabbar_main.png')}
          selectedImage={require('../images/tabicon/tabbar_main_s.png')}
        />
      )
    }
  }

const ProfileScreen = createStackNavigator({
    Profile,
},{
    initialRouteName: 'Profile'
})
ProfileScreen.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      tabBarLabel: '设置',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
          focused={focused}
          tintColor={tintColor}
          normalImage={require('../images/tabicon/tabbar_profile.png')}
          selectedImage={require('../images/tabicon/tabbar_profile_s.png')}
        />
      )
    }
  }
export default createBottomTabNavigator(
    {
        HomeScreen,
        MainScreen,
        ProfileScreen
    },{
      header: null,

    }
)