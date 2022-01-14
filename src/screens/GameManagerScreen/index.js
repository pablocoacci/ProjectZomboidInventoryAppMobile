import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import style from './styles';
import * as GameRepository from '../../repositories/GamesRepository';
import * as ItemsRepository from '../../repositories/ItemsRepository';

export default function GameManagerScreen({ navigation, route }) {

  const [refresh, setRefresh] = useState(true);
  const [gameList, setGameList] = useState([]);
  const [gameName, setGameName] = useState('');

  useEffect(async () => {
    let games = await GameRepository.getAllGames();
    setGameList(games);
  }, [refresh])

  const newGame = async () => {
    if (gameName == '') {
      return;
    }

    let existName = await GameRepository.existGame(gameName);
    
    if (existName) {
      alert('Ya existe esta partida');
      return;
    }
    
    await GameRepository.saveGame(gameName);
    await ItemsRepository.createInventoryGame(gameName);
    setGameName('');
    setRefresh(!refresh);
    alert('Partida Creada');
  }

  const deleteGame = async (gameName) => {
    await GameRepository.deleteGame(gameName);
    await ItemsRepository.deleteInventoryGame(gameName);
    setRefresh(!refresh);
  }

  const Item = ({ gameName }) => (
    <View style={style.itemListContainer}>
      <Text style={style.itemText}>{gameName}</Text>
      <TouchableOpacity
        style={style.buttonItemList}
        onPress={() => {deleteGame(gameName)}}
      >
        <Text>Borrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonItemList}
        onPress={() => navigation.navigate('Inventory', {gameName: gameName})}
      >
        <Text>Ver</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item gameName={item} />
  );

  return (
      <View style={style.basicContainer}>
        <View>
          <Text style={style.titleText}>Nombre de la Partida:</Text>
          <TextInput
            style={style.basicInputText}
            onChangeText={setGameName}
            value={gameName}
          />
        
          <TouchableOpacity
            style={style.basicButton}
            onPress={newGame}
          >
            <Text>Crear Partida</Text>
          </TouchableOpacity>
        </View>
        <View style={style.flatListContainer}>
          <FlatList
            data={gameList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    );
  }