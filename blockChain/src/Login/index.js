import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

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
            </View>
        )
    }

}

export default Login;