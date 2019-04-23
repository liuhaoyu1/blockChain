import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchNavigator from './LaunchNavigator'
export default createAppContainer(createStackNavigator({
    Launch: LaunchNavigator,
},{
    initialRouteName: "Launch"
}))