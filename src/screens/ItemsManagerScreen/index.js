import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Modal, StyleSheet, Dimensions} from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import style from './styles';
import * as ItemsRepository from '../../repositories/ItemsRepository';

const windowWidth = Dimensions.get('window').width;

export default function ItemsScreen({ navigation, route }) {  
  const categories = ItemsRepository.getAllCategories();
  const [categorySelect, setCategorySelect] = useState(categories[0]);
  const [itemList, setItemList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  
  useEffect(async () => {
    let items = await ItemsRepository.getItems();
    setItemList(items);
  }, [refresh])

  const createNewItem = async() => {
    const existItem = await ItemsRepository.existItem(itemName)
    
    if (existItem) {
      alert('Ya existe un item con ese nombre');
      return;
    }

    await ItemsRepository.addNewItem(itemName, categorySelect);
    setModalVisible(!modalVisible);
    setRefresh(!refresh);
    setItemName('');
    alert('Se creo existosamente');
  }

  const deleteItem = async(itemName) => {
    await ItemsRepository.deleteItem(itemName);
    setRefresh(!refresh);
    alert('Se ha eliminado exitosamente');
  }

  const renderItem = ({ item }) => {
    return (
      <View style={style.itemContainer}>
        <Text style={style.principalItemText}>{item.ItemName}</Text>
        <Text style={style.secundaryItemText}>{item.Category}</Text>
        <TouchableOpacity
          style={style.buttonItem}
          onPress={() => {deleteItem(item.ItemName)}}
        >
          <Text>Borrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={style.basicContainer}>
      <View style={style.flatListContainer}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.ItemName}
        />
      </View>
      <TouchableOpacity
        style={style.basicButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text>Crear Nuevo Item</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalTitleText}>Nuevo Item</Text>
            <TextInput 
              style={style.modalInputText}
              onChangeText={setItemName} 
              value={itemName}
            />
            <SelectDropdown
              data={categories}
              onSelect={(selectedItem, index) => {
                setCategorySelect(selectedItem);
              }}
              defaultValueByIndex={0}
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
            <TouchableOpacity
              style={style.modalButton}
              onPress={() => {
                createNewItem();
              }}
            >
              <Text>Crear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.modalButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}