import { createDrawerNavigator } from '@react-navigation/drawer';
import { GameStackNavigation } from './StackNavigator';
import GameConfigurationScreen from '../screens/ConfigurationScreen';
import ItemsScreen from '../screens/ItemsManagerScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={GameStackNavigation} />
        <Drawer.Screen name="Items" component={ItemsScreen} />
        <Drawer.Screen name="Configuracion" component={GameConfigurationScreen} />
    </Drawer.Navigator>
    )
}