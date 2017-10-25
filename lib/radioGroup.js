import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        this.prevSelected = this.props.selectedIndex
        this.onSelect = this.onSelect.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedIndex != this.prevSelected){
            this.prevSelected = nextProps.selectedIndex
            this.setState({
                selectedIndex: nextProps.selectedIndex
            })
        }
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
            let isSelected = this.state.selectedIndex == index
            let color = isSelected && this.props.activeColor?this.props.activeColor:this.props.color
            return (
                <RadioButton
                    color={color}
                    activeColor={this.props.activeColor}
                    {...radioButton.props}
                    index={index}
                    isSelected={isSelected}
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
    onSelect: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    thickness: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    activeColor: PropTypes.string,
    highlightColor: PropTypes.string,
}

RadioGroup.defaultProps = {
    size: defaultSize,
    thickness: defaultThickness,
    color: defaultColor,
    highlightColor: null,
}
