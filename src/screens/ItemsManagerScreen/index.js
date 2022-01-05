import * as React from 'react';
import { View, Text } from 'react-native';

export default function ItemsScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Items Screen</Text>
      </View>
    );
  }