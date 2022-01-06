import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import style from './styles';
import * as GameRepository from '../../repositories/GamesRepository';

export default function GameManagerScreen({ navigation, route }) {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const [gameName, setGameName] = useState('');

  const newGame = async () => {
    console.log(gameName);
    alert('hola mundo');
  }

  const prueba = (textito) => {
    console.log('entro');
    console.log(textito);
    alert('hola mundo2');
  }

  const Item = ({ title }) => (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity
          
          onPress={() => {prueba(title)}}
        >
          <Text>texto boton</Text>
        </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }