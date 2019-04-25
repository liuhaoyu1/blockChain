import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import {
    REQUEST_MEMBER_ADD,
} from '../redux/actions/actionTypes'
class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          header: null,
        }
      }

    constructor(props) {
        super(props)
    }

    state = {
        token: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState !== this.state;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.token !== nextProps.token && !!nextProps.token) {
            this.setState({
                token: nextProps.token
            })
          }
    }

    onAdd() {
        this.props.getOnAdd('3412341234124124123')
    }
    
    render() {
        console.log('render刷新了几次')
        return (
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity onPress={()=>this.onAdd()}>
                    <Text>fasdfasfasdfasfasd</Text>
                </TouchableOpacity>
                <Text>{this.state.token}</Text>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state.HomePageState)
    return {
        token: state.HomePageState.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getOnAdd:(payload)=>dispatch({type:REQUEST_MEMBER_ADD,payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);