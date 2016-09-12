import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class App extends Component{

    constructor(){
        super()
        this.state = {
            text: ''
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(index, value){
        this.setState({
        text: `Selected index: ${index} , value: ${value}`
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <RadioGroup
                    size={24}
                    thickness={2}
                    color='#9575b2'
                    highlightColor='#ccc8b9'
                    selectedIndex={1}
                    onSelect = {(index, value) => this.onSelect(index, value)}
                >
                    <RadioButton 
                        style={{alignItems:'center'}}
                        value='Yo!! I am a cat.' 
                        
                    >
                        <Image
                            style={{width:100, height: 100}}
                            source={{uri:'https://cloud.githubusercontent.com/assets/21040043/18446298/fa576974-794b-11e6-8430-b31b30846084.jpg'}}
                        />
                    </RadioButton>

                    <RadioButton 
                        value='index1'
                    > 
                        <Text>Start from item index #1</Text>
                    </RadioButton>

                    <RadioButton 
                        value='red color'
                        color='red'
                    >
                        <Text>Red Dot</Text>
                    </RadioButton>

                    <RadioButton 
                        value='green color'
                        color='green'
                    >
                        <Text>Green Dot</Text>
                    </RadioButton>

                    <RadioButton 
                        value='blue color'
                        color='blue'
                    >
                        <Text>Blue Dot</Text>
                    </RadioButton>
                </RadioGroup>
                
                <Text style={styles.text}>{this.state.text}</Text>
                
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    text: {
        padding: 10,
        fontSize: 14,
    },
})

module.exports = App


