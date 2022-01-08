import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GameConfigurationScreen({ navigation, route }) {

    const cleanStorage = async () => {
        await AsyncStorage.clear();
        alert('Storage Limpio');
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>GameConfiguration Screen</Text>
        <Button
            onPress={cleanStorage}
            title="Limpiar Storage"
            color="#841584"
        />
      </View>
    );
  }