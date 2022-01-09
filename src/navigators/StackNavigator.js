import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import GameManagerScreen from '../screens/GameManagerScreen';
import InvetoryScreen from '../screens/InvetoryScreen';
import ItemsScreen from '../screens/ItemsManagerScreen';
import ItemCreateScreen from '../screens/ItemCreateScreen';

const Stack = createNativeStackNavigator();

function GameStackNavigation() {
    return(
        <Stack.Navigator initialRouteName='GameManager'>
            <Stack.Screen
                name='GameManager'
                component={GameManagerScreen}
                options={{
                    // headerLeft: () => (
                    //     <Button onPress={() => navigation.openDrawer()} title='sa' />
                    // ),
                    // title: 'MiAPP - Home',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Inventory'
                component={InvetoryScreen}
                options={{
                    // headerLeft: () => (
                    //     <Button onPress={() => navigation.openDrawer()} title='sa' />
                    // ),
                    // title: 'MiAPP - Home',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function ItemManagerStackNavigatrion() {
    return(
        <Stack.Navigator initialRouteName='ItemsList'>
            <Stack.Screen
                name='ItemsList'
                component={ItemsScreen}
                options={{
                    // headerLeft: () => (
                    //     <Button onPress={() => navigation.openDrawer()} title='sa' />
                    // ),
                    // title: 'MiAPP - Home',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ItemCreate'
                component={ItemCreateScreen}
                options={{
                    // headerLeft: () => (
                    //     <Button onPress={() => navigation.openDrawer()} title='sa' />
                    // ),
                    // title: 'MiAPP - Home',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export { GameStackNavigation, ItemManagerStackNavigatrion };