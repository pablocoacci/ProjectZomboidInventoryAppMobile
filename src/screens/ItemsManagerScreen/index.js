import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, Modal, ImageBackground} from 'react-native';
import DropDownList from '../../components/DropDownList';
import BasicInputText from '../../components/BasicInputText';
import ButtonFlatList from '../../components/ButtonFlatList';
import BasicButton from '../../components/BasicButton';
import style from './styles';
import * as ItemsRepository from '../../repositories/ItemsRepository';

export default function ItemsScreen({ navigation, route }) {  
  const categories = ItemsRepository.getAllCategories();
  const [categorySelect, setCategorySelect] = useState(categories[0]);
  const [itemList, setItemList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemNameSearch, setItemNameSearch] = useState('');
  
  useEffect(async () => {
    let items = await filterInventory();
    setItemList(items);
  }, [refresh])

  const filterInventory = async () => {
    let filterList = await ItemsRepository.getItems();
    
    if (itemNameSearch != '') {
      filterList = filterList.filter(i => i.ItemName.toLowerCase().includes(itemNameSearch.toLowerCase()));
    }
    
    return filterList;
  }

  const createNewItem = async() => {
    if(itemName == null || itemName == '') {
      return;
    }

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
        <ButtonFlatList buttonWidth='15%' iconSize={30} iconName='delete' funcOnClick={() => {deleteItem(item.ItemName)}} />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../../img/PZBackground.jpg')} resizeMode="cover" style={style.image}>
    <View style={style.basicContainer}>
      <View style={{width: '90%', marginTop: 10}}>
        <BasicInputText 
          valueText={itemNameSearch}
          funcChange={(value) => {
            setItemNameSearch(value);
            setRefresh(!refresh);
          }}
        />
      </View>
      <View style={style.flatListContainer}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.ItemName}
        />
      </View>
      <View style={{width:'90%'}}>
        <BasicButton buttonText='Crear Nuevo Item' funcOnClick={() => setModalVisible(!modalVisible)}/>
      </View>
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
            <View style={style.modalButtons}>
              <DropDownList 
                dropDownList={categories} 
                defaultValue='Libro' 
                funcOnSelect={(selectedItem, index) => {
                  setCategorySelect(selectedItem);
                }}
              />
              <BasicButton buttonText='Crear' funcOnClick={() => {createNewItem();}} />
              <BasicButton buttonText='Cancelar' funcOnClick={() => {setModalVisible(!modalVisible);}} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
}