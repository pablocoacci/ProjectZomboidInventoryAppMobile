import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import style from './style';

export default function ButtonFlatList(props) {
    const buttonWidth = props.buttonWidth;
    const iconSize = props.iconSize
    const iconName = props.iconName;
    const funcOnClick = props.funcOnClick;

    return (
    <TouchableOpacity
        style={[style.flatItemButton,{width: buttonWidth}]}
        onPress={funcOnClick}
    >
        <AntDesign name={iconName} size={iconSize} color="azure" />
    </TouchableOpacity>
    );
}