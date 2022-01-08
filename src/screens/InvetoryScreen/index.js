import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function InvetoryScreen({ navigation, route }) {
    
    const gameName = route.params.gameName;
    console.log(gameName);
    
    return (
    <View style={{ flex: 1 }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
    );
  }