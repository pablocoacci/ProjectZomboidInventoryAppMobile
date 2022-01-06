import * as React from 'react';
import { View, Text } from 'react-native';

export default function InvetoryScreen({ navigation, route }) {
    return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
    );
  }