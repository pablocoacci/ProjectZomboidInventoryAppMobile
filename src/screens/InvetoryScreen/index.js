import React, { useState, useEffect }from "react";
import { View, Text, Dimensions, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from "react-native";
import style from './styles';
import * as ItemsRepository from '../../repositories/ItemsRepository';
import SelectDropdown from "react-native-select-dropdown";

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
      filterList = filterList.filter(i => i.ItemName.toLowerCase().startsWith(itemName.toLowerCase()));
    }
    
    if (categorySelect != 'Todas') {
      filterList = filterList.filter(i => i.Category == categorySelect);
    }

    return filterList;
  }

  const addItem = async (itemName) => {
    let item = itemDataList.find(i => i.ItemName == itemName);
    item.Count++;
    await ItemsRepository.updateInventoryGame(gameName,itemDataList);
    setRefresh(!refresh);
  }

  const subtractItem = async (itemName) => {
    let item = itemDataList.find(i => i.ItemName == itemName);

    if (item.Count <= 0) {
      return;
    }

    item.Count--;
    await ItemsRepository.updateInventoryGame(gameName,itemDataList);
    setRefresh(!refresh);
  }

  const renderItem = ({item}) => {
    return (
      <View style={style.itemContainer}>
        <Text style={style.principalItemText}>{item.ItemName}</Text>
        <Text style={style.secundariItemText}>{item.Category.charAt(0)}</Text>
        <TouchableOpacity
          style={style.itemButon}
          onPress={() => {addItem(item.ItemName)}}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={style.secundariItemText}>{item.Count}</Text>
        <TouchableOpacity
          style={style.itemButon}
          onPress={() => {subtractItem(item.ItemName)}}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
      <View style={style.principalContainer}>
        <View>
          <Text style={style.titleText}>Partida: {gameName}</Text>
        </View>
        <TextInput
          style={style.basicInputText}
          onChangeText={(value) => {
            setItemName(value);
            setRefresh(!refresh);
          }}
          value={itemName}
        />
        <SelectDropdown
          data={categories}
          onSelect={(selectedItem, index) => {
            setCategorySelect(selectedItem);
            setRefresh(!refresh);
          }}
          defaultValue={"Todas"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={style.dropdown2BtnStyle}
          buttonTextStyle={style.dropdown2BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={style.dropdown2DropdownStyle}
          rowStyle={style.dropdown2RowStyle}
          rowTextStyle={style.dropdown2RowTxtStyle}
        />
        <View style={style.flatListContainer}>
          <FlatList
            data={itemDataList}
            renderItem={renderItem}
            keyExtractor={(item) => item.ItemName}
          />
        </View>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
  );
};