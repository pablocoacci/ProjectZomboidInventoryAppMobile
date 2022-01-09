import { createDrawerNavigator } from '@react-navigation/drawer';
import { GameStackNavigation, ItemManagerStackNavigatrion } from './StackNavigator';
import ItemsManagerScreen from '../screens//ItemsManagerScreen';
import GameConfigurationScreen from '../screens/ConfigurationScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={GameStackNavigation} />
        <Drawer.Screen name="Items" component={ItemManagerStackNavigatrion} />
        <Drawer.Screen name="Configuracion" component={GameConfigurationScreen} />
    </Drawer.Navigator>
    )
}