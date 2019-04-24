import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon }  from '@ant-design/react-native'
class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          header: null,
        }
      }
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={{}}>
                <Text style={{color:'red'}}>login</Text>
                <Icon name='left' size={24} />
            </View>
        )
    }

}

export default Login;