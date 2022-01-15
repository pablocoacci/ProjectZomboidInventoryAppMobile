import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import style from './styles';
import TitleTextLabel from '../../components/TitleTextLabel';
import BasicButton from '../../components/BasicButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameConfigurationScreen({ navigation, route }) {

    const cleanStorage = async () => {
        await AsyncStorage.clear();
        alert('Storage Limpio');
    }

    return (
      <ImageBackground source={require('../../img/PZBackground.jpg')} resizeMode="cover" style={style.image}>
      <View style={style.basicContainer}>
        <TitleTextLabel labelText='Configuraciones'/>
        <BasicButton buttonText='Limpiar Storage' funcOnClick={cleanStorage} />
      </View>
      </ImageBackground>
    );
  }