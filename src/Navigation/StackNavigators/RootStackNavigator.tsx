import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/Screens/Login/LoginScreen';
import SignupScreen from 'src/Screens/Signup/SignupScreen';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import ForgotPasswordScreen from 'src/Screens/ForgotPassword/ForgotPasswordScreen';
import LogoutScreen from 'src/Screens/Logout/LogoutScreen';


const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
