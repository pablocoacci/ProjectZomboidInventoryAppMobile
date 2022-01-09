import React, { useState, useEffect }from "react";
import { View, Text, Dimensions, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from "react-native";
import * as ItemsRepository from '../../repositories/ItemsRepository';
import SelectDropdown from "react-native-select-dropdown";

export default function InvetoryScreen({ navigation, route }) {
  const gameName = route.params.gameName;
  const categories = ItemsRepository.getAllCategories();
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
      <View style={{ height: 40, flexDirection:'row', backgroundColor:'lavender', marginBottom:5, justifyContent: 'space-between'}}>
        <Text style={{ width: '60%', fontSize: 18, textAlignVertical:'center'}}>{item.ItemName}</Text>
        <Text style={{ fontSize: 18, textAlignVertical:'center'}}>{item.Category.charAt(0)}</Text>
        <TouchableOpacity
          style={{ backgroundColor:'lightcoral', width: 30, justifyContent:'center', alignItems:'center' }}
          onPress={() => {addItem(item.ItemName)}}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, textAlignVertical:'center'}}>{item.Count}</Text>
        <TouchableOpacity
          style={{ backgroundColor:'lightcoral', width: 30, justifyContent:'center', alignItems:'center' }}
          onPress={() => {subtractItem(item.ItemName)}}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
      <View style={{flex:1, marginLeft: 10, marginRight: 10}}>
        <View>
          <Text style={{fontSize: 15, marginTop: 5, marginBottom: 10,  color: "#000", fontWeight: "bold"}}>Partida: {gameName}</Text>
        </View>
        <TextInput
          style={{borderWidth:1, padding: 3, marginBottom: 10}}
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
          defaultValueByIndex={0}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
        <View style={{flex: 1, borderWidth:1, marginBottom: 5}}>
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

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
    marginBottom: 10
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: { backgroundColor: "#444" },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  }
});