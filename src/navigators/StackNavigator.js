import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameManagerScreen from '../screens/GameManagerScreen';
import InvetoryScreen from '../screens/InvetoryScreen';

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

export { GameStackNavigation };