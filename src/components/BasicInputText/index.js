import React from 'react';
import { TextInput } from 'react-native';
import style from './style';

export default function BasicInputText(props) {
    const valueText = props.valueText;
    const funcChange = props.funcChange

    return (
        <TextInput 
            style={style.basicInputText}
            onChangeText={funcChange}
            value={valueText}
        />
    );
}