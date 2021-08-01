import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './Menu';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import Setting from '../screens/Settings';
import Support from '../screens/Support';
import Logout from '../screens/Logout';
 
//const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
      <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Menu{...props}/>}>
            <Drawer.Screen name="Perfil" component={PerfilScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Settings" component={Setting} />
            <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default MyDrawer;