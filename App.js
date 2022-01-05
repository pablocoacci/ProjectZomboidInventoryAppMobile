import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GameManagerScreen from './src/screens/GameManagerScreen';
import InvetoryScreen from './src/screens/InvetoryScreen';
import ItemsManagerScreen from './src/screens/ItemsManagerScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="GameManager">
        <Drawer.Screen name="Partidas" component={GameManagerScreen} />
        <Drawer.Screen name="Items" component={ItemsManagerScreen} />
        <Drawer.Screen name="Inventario" component={InvetoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}