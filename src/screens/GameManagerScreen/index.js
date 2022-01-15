import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native'; 
import style from './styles';
import TitleTextLabel from '../../components/TitleTextLabel';
import BasicInputText from '../../components/BasicInputText';
import BasicButton from '../../components/BasicButton';
import ButtonFlatList from '../../components/ButtonFlatList';
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
      <ButtonFlatList iconSize={30} iconName='delete' buttonWidth='15%' funcOnClick={() => deleteGame(gameName)} />
      <ButtonFlatList iconSize={30} iconName='search1' buttonWidth='15%' funcOnClick={() => navigation.navigate('Inventory', {gameName: gameName})} />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item gameName={item} />
  );

  return (
    <ImageBackground source={require('../../img/PZBackground.jpg')} resizeMode="cover" style={style.image}>
      <View style={style.basicContainer}>
        <View>
          <TitleTextLabel labelText='Nombre de la Partida:'/>
          <BasicInputText valueText={gameName} funcChange={setGameName}/>
          <BasicButton funcOnClick={newGame} buttonText='Crear Partida'/>
        </View>
        <View style={style.flatListContainer}>
          <FlatList
            data={gameList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }