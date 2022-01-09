import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function ItemCreateScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>ItemCreate Screen</Text>
          <Button title='Volver' onPress={()=> navigation.goBack()}></Button>
        </View>
      );
}