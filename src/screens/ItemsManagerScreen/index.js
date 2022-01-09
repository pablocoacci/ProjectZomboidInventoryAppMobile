import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import * as ItemsRepository from '../../repositories/ItemsRepository';

export default function ItemsScreen({ navigation, route }) {
  const [itemList, setItemList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(async () => {
    let items = await ItemsRepository.getItems();
    setItemList(items);
  }, [refresh])

  const renderItem = ({ item }) => {
    return (
      <View style={{flexDirection:'row'}}>
        <Text>{item.ItemName}</Text>
        <Text>{item.Category}</Text>
        <Button title='borrar'></Button>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Items</Text>
      <View style={{flex:1, borderWidth:1}}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.ItemName}
        />
      </View>
      <Button title='Crear Item' onPress={() => navigation.navigate('ItemCreate')}></Button>
    </View>
  );
  }