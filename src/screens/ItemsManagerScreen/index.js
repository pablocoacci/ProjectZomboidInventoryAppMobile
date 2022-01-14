import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button, Alert, Modal, StyleSheet, Dimensions} from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
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
      <View style={{height: 40, flexDirection:'row', backgroundColor:'lavender', marginBottom:5, justifyContent: 'space-between'}}>
        <Text style={{width: '50%', fontSize: 15, textAlignVertical:'center', paddingLeft: 5}}>{item.ItemName}</Text>
        <Text style={{textAlignVertical:'center'}}>{item.Category}</Text>
        <TouchableOpacity
          style={{ backgroundColor:'lightcoral', width: 70, justifyContent:'center', alignItems:'center' }}
          onPress={() => {deleteItem(item.ItemName)}}
        >
          <Text>Borrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{flex:1, borderWidth:1, width: '90%', marginBottom: 8}}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.ItemName}
        />
      </View>
      <TouchableOpacity
        style={{alignItems: "center",backgroundColor: "#DDDDDD", padding: 10, marginBottom: 10, width: '90%'}}
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{marginBottom: 10, fontSize: 17}}>Nuevo Item</Text>
            <TextInput 
              style={{borderWidth: 1, width: windowWidth * 0.7, height: 40, marginBottom: 8}}
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
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
            <TouchableOpacity
              style={{alignItems: "center",backgroundColor: "#DDDDDD", padding: 10, marginBottom: 10, width: windowWidth * 0.7}}
              onPress={() => {
                createNewItem();
              }}
            >
              <Text>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  dropdown2BtnStyle: {
    width: windowWidth * 0.7,
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