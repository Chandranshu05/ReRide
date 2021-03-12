import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import DrawerMenu from './DrawerMenu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {

  return (
    <Drawer.Navigator
    drawerStyle={{width: '70%', backgroundColor: "#f0f0f0"}}
    drawerType="slide"
    initialRouteName="HomeStack"
    drawerContent={(props: any) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen
      name="Home"
      component={HomeScreen}/>
    </Drawer.Navigator>
  )
}

export const HomeStackScreen = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
       />
    </Stack.Navigator>
  )
}

export default DrawerNavigator

