import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as GameRepository from '../../repositories/GamesRepository';

export default function GameManagerScreen({ navigation, route }) {

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>GameManager Screen</Text>
      </View>
    );
  }