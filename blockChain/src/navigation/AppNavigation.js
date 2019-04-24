import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LaunchNavigator from './LaunchNavigator';
import LoginNavigator from './AuthNavigator';
import MainNavigator from './MainNavigation';
export default createAppContainer(createSwitchNavigator({
    Launch: LaunchNavigator,
    Auth: LoginNavigator,
    MainNavigator: MainNavigator,
},{
    initialRouteName: "MainNavigator"
}))