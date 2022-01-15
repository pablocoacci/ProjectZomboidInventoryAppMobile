import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import style from './style';

export default function BasicButton(props) {
    const funcOnClick = props.funcOnClick;
    const buttonText = props.buttonText;
    
    return (
        <TouchableOpacity
            style={style.basicButton}
            onPress={funcOnClick}
        >
            <Text style={style.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}