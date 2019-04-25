import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);