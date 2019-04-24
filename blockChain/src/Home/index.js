import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'

class Home extends PureComponent {
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
            <SafeAreaView style={{flex:1}}>
                <Text>Home</Text>
            </SafeAreaView>
        )
    }

}

export default Home;