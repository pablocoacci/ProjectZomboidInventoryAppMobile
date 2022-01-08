import { createDrawerNavigator } from '@react-navigation/drawer';
import { GameStackNavigation } from './StackNavigator';
import ItemsManagerScreen from '../screens//ItemsManagerScreen';
import GameConfigurationScreen from '../screens/ConfigurationScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={GameStackNavigation} />
        <Drawer.Screen name="Items" component={ItemsManagerScreen} />
        <Drawer.Screen name="Configuracion" component={GameConfigurationScreen} />
    </Drawer.Navigator>
    )
}