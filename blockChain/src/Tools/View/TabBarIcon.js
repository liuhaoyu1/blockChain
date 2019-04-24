import React, {Component} from 'react';
import {Image} from "react-native";

export default class TabBarIcon extends Component {


    constructor(props) {
        super(props);
    }

    static defaultProps = {
        tintColor: '#ffffff',
        focused: false,
        normalImage: NaN,
        selectedImage: NaN,
    }

    render() {
        return (
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ {tintColor: this.props.tintColor, width: 23, height: 23} }
            />
        );
    }
}