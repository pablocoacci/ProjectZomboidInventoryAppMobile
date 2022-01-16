import React, { useState, useEffect }from "react";
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import style from './styles';
import * as ItemsRepository from '../../repositories/ItemsRepository';
import TitleTextLabel from '../../components/TitleTextLabel';
import BasicInputText from '../../components/BasicInputText';
import ButtonFlatList from '../../components/ButtonFlatList';
import BasicButton from '../../components/BasicButton';
import DropDownList from '../../components/DropDownList';

export default function InvetoryScreen({ navigation, route }) {
  const gameName = route.params.gameName;
  const categories = ItemsRepository.getAllCategoriesWithDefault();
  const [categorySelect, setCategorySelect] = useState('Todas');
  const [itemName, setItemName] = useState('');
  const [itemDataList, setItemDataList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(async () => {
    let invetoryGame = await filterInventory();
    setItemDataList(invetoryGame);
  }, [refresh])

  const filterInventory = async () => {
    let filterList = await ItemsRepository.getInventoryGame(gameName);
    
    if (itemName != '') {
      filterList = filterList.filter(i => i.ItemName.toLowerCase().includes(itemName.toLowerCase()));
    }
    
    if (categorySelect != 'Todas') {
      filterList = filterList.filter(i => i.Category == categorySelect);
    }

    return filterList;
  }

  const addItem = async (itemName) => {
    let inventory = await ItemsRepository.getInventoryGame(gameName);
    let item = inventory.find(i => i.ItemName == itemName);
    item.Count++;
    await ItemsRepository.updateInventoryGame(gameName,inventory);
    setRefresh(!refresh);
  }

  const subtractItem = async (itemName) => {
    let inventory = await ItemsRepository.getInventoryGame(gameName);
    let item = inventory.find(i => i.ItemName == itemName);

    if (item.Count <= 0) {
      return;
    }

    item.Count--;
    await ItemsRepository.updateInventoryGame(gameName, inventory);
    setRefresh(!refresh);
  }

  const renderItem = ({item}) => {
    return (
      <View style={style.itemContainer}>
        <Text style={style.principalItemText}>{item.ItemName}</Text>
        <Text style={style.secundariItemText}>{item.Category.charAt(0)}</Text>
        <ButtonFlatList buttonWidth={'12%'} iconSize={30} iconName='plus' funcOnClick={() => {addItem(item.ItemName)}}/>
        <Text style={style.secundariItemText}>{item.Count}</Text>
        <TouchableOpacity
          style={style.itemButon}
          onPress={() => {subtractItem(item.ItemName)}}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <ButtonFlatList buttonWidth={'12%'} iconSize={30} iconName='minus' funcOnClick={() => {subtractItem(item.ItemName)}}/>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../../img/PZBackground.jpg')} resizeMode="cover" style={style.image}>
      <View style={style.principalContainer}>
        <TitleTextLabel labelText={'Partida: ' + gameName}/>
        <BasicInputText 
          valueText={itemName} 
          funcChange={(value) => {
            setItemName(value);
            setRefresh(!refresh);
          }}
        />
        <DropDownList 
          dropDownList={categories} 
          defaultValue={"Todas"}
          funcOnSelect={(selectedItem, index) => {
            setCategorySelect(selectedItem);
            setRefresh(!refresh);
          }}
        />
        <View style={style.flatListContainer}>
          <FlatList
            data={itemDataList}
            renderItem={renderItem}
            keyExtractor={(item) => item.ItemName}
          />
        </View>
        <BasicButton buttonText='Volver' funcOnClick={() => navigation.goBack()} />
      </View>
      </ImageBackground>
  );
};