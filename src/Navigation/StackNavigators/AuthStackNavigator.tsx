import HomeScreen from 'src/Screens/Home/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogoutScreen from 'src/Screens/Logout/LogoutScreen';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={"Drawer"}> 
      {/* <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}
      <AuthStack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={({navigation}) => ({
          headerShown: false
        })}
      />

    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
