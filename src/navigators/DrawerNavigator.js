import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import { GameStackNavigation } from './StackNavigator';
import GameConfigurationScreen from '../screens/ConfigurationScreen';
import ItemsScreen from '../screens/ItemsManagerScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
    <Drawer.Navigator>
        <Drawer.Screen 
            name="Home" 
            component={GameStackNavigation} 
            options={{
                title: 'Partidas',
                drawerIcon: ({focused, size}) => (
                    <AntDesign name="home" size={24} color="black" />
                 ),
            }}
        />
        <Drawer.Screen 
            name="Items" 
            component={ItemsScreen}
            options={{
                title: 'Lista Items',
                drawerIcon: ({focused, size}) => (
                    <AntDesign name="key" size={24} color="black" />
                 ),
            }}  
        />
        <Drawer.Screen 
            name="Configuracion" 
            component={GameConfigurationScreen}
            options={{
                title: 'Configuracion',
                drawerIcon: ({focused, size}) => (
                    <AntDesign name="setting" size={24} color="black" />
                 ),
            }} 
        />
    </Drawer.Navigator>
    )
}