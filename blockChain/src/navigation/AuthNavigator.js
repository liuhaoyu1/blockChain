import { createStackNavigator } from 'react-navigation';
import Login from '../Login';

const authStack = createStackNavigator({
    Login: Login,
},{
    initialRouteName: "Login"
})
export default authStack;