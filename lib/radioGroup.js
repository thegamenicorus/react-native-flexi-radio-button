import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import RadioButton from './radioButton'

const defaultSize = 20
const defaultThickness = 1
const defaultColor = '#007AFF'

export default  class RadioGroup extends Component{
    constructor(props, context){
        super(props, context)

        this.state = {
            selectedIndex: this.props.selectedIndex,
        }

        this.onSelect = this.onSelect.bind(this)
    }

    getChildContext() {
        return {
            onSelect: this.onSelect , 
            size: this.props.size,
            thickness: this.props.thickness,
            color: this.props.color,
            highlightColor: this.props.highlightColor
        };
    }

    onSelect(index, value){
        this.setState({
            selectedIndex: index
        })
        if(this.props.onSelect)
            this.props.onSelect(index, value)
    }

    render(){
        var radioButtons = React.Children.map(this.props.children, (radioButton, index) => {
            return (
                <RadioButton
                    color={this.props.color}
                    {...radioButton.props}
                    index={index}
                    isSelected={this.state.selectedIndex == index}
                >
                    {radioButton.props.children}
                </RadioButton>
            )
        })

        return(
            <View style={this.props.style}>
                {radioButtons}
            </View>
        )
    }
}

RadioGroup.childContextTypes = {
    onSelect: React.PropTypes.func.isRequired,
    size: React.PropTypes.number.isRequired,
    thickness: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    highlightColor: React.PropTypes.string,
}

RadioGroup.defaultProps = {
    size: defaultSize,
    thickness: defaultThickness,
    color: defaultColor,
    highlightColor: null,
}