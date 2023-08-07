import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';

import CarritoScreen from '../Screens/CarritoScreen'
import HomeScreen from '../Screens/HomeScreen';
import IniciarSesion from '../Screens/IniciarSesion';
import Perfil from '../Screens/Perfil'
import ProductosScreen from '../Screens/ProductosScreen';
import Registro from '../Screens/Registro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Pantalla de pestañas (Bottom Tab Navigator)
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
      {/* Agrega más pestañas según sea necesario */}
    </Tab.Navigator>
  );
}

// Stack Navigator principal
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackScreens" component={StackScreens} />
      <Stack.Screen name="Carrito" component={CarritoScreen}/>
    </Stack.Navigator>
  );
}

// Pantalla que contiene el Tab.Navigator
function StackScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Carrito" component={CarritoScreen} />
      <Tab.Screen name="Productos" component={ProductosScreen} />
    </Tab.Navigator>
  );
}

// Navegación principal
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
