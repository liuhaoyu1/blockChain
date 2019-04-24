import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
interface Props {

}
interface State {

}
class Profile extends PureComponent<Props,State> {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }

}

export default Profile;