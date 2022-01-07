import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import style from './styles';
import * as GameRepository from '../../repositories/GamesRepository';

export default function GameManagerScreen({ navigation, route }) {

  const [refresh, setRefresh] = useState(true);
  const [gameList, setGameList] = useState([]);
  const [gameName, setGameName] = useState('');

  useEffect(async () => {
    let games = await GameRepository.getAllGames();
    setGameList(games);
  }, [refresh])

  const newGame = async () => {
    let existName = await GameRepository.existGame(gameName);
    
    if (existName) {
      alert('Ya existe esta partida');
      return;
    }
    
    await GameRepository.saveGame(gameName);
    setGameName('');
    setRefresh(!refresh);
    alert('Partida Creada');
  }

  const deleteGame = async (gameName) => {
    await GameRepository.deleteGame(gameName);
    setRefresh(!refresh);
  }

  const Item = ({ gameName }) => (
    <View style={{flexDirection:'row', backgroundColor:'lavender', marginBottom:15, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 25, marginLeft:5, padding:15}}>{gameName}</Text>
      <TouchableOpacity
          style={{margin:10,padding:15,backgroundColor:'lightcoral'}}
          onPress={() => {deleteGame(gameName)}}
        >
          <Text>Borrar</Text>
        </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item gameName={item} />
  );

  return (
      <View style={{flex:1, marginLeft: 10, marginRight: 10}}>
        <View>
          <Text style={{fontSize: 15, marginTop: 5, marginBottom: 10}}>Nombre de la Partida</Text>
          <TextInput
            style={{borderWidth:1, padding: 3, marginBottom: 10}}
            onChangeText={setGameName}
            value={gameName}
          />
        
          <TouchableOpacity
            style={{alignItems: "center",backgroundColor: "#DDDDDD", padding: 10, marginBottom: 10}}
            onPress={newGame}
          >
            <Text>Crear Partida</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, borderWidth:1}}>
          <FlatList
            data={gameList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    );
  }