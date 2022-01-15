import React from "react";
import { Text } from 'react-native';
import style from './style';

export default function TitleTextLabel(props) {
    const labelText = props.labelText;
    
    return(
        <Text style={style.titleLabel}>{labelText}</Text>
    );
}