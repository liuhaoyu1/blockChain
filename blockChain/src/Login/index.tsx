import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
interface Props {

}
interface State {

}
class Login extends PureComponent<Props,State> {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
                <Text>login</Text>
            </View>
        )
    }

}

export default Login;