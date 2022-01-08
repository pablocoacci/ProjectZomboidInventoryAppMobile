import { createDrawerNavigator } from '@react-navigation/drawer';
import { GameStackNavigation } from './StackNavigator';
import ItemsManagerScreen from '../screens//ItemsManagerScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={GameStackNavigation} />
        <Drawer.Screen name="Items" component={ItemsManagerScreen} />
    </Drawer.Navigator>
    )
}