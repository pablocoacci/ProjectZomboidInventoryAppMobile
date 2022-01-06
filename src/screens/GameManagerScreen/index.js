import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './styles';
import * as GameRepository from '../../repositories/GamesRepository';

export default function GameManagerScreen({ navigation, route }) {

  const [gameName, setGameName] = useState('');

  const newGame = async () => {
    console.log(gameName);
    alert('hola mundo');
  }

  return (
      <View style={style.container}>
        <View style={style.countContainer}>
          <Text>Nombre de la Partida</Text>
          <TextInput
            style={style.input}
            onChangeText={setGameName}
            value={gameName}
          />
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={newGame}
        >
          <Text>Crear Partida</Text>
        </TouchableOpacity>
      </View>
    );
  }