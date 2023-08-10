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

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Pantalla de pestañas (Bottom Tab Navigator)


// Stack Navigator principal
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Registro">
      <Stack.Screen name="Carrito" component={CarritoScreen}/>
      <Stack.Screen name="StackScreens"component={StackScreens} />
      <Stack.Screen name="Registro" component={Registro}/>
      <Stack.Screen name="Iniciar" component={IniciarSesion}/>
    </Stack.Navigator>
  );
}

// Pantalla que contiene el Tab.Navigator
function StackScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel:'Inicio',
        tabBarIcon: () => (
          <FontAwesome name="home" size={24} color="black" />
        ),
        headerTitle:'Inicio'
    }} /> 
      
      
      <Tab.Screen name="Productos" component={ProductosScreen}
      options={{
        tabBarLabel:'Productos',
        tabBarIcon: () => (
          <FontAwesome5 name="tshirt" size={24} color="black" />
        ),
        headerTitle:'Productos'
    }} /> 
      <Tab.Screen name="Perfil" component={Perfil}
      options={{
        tabBarLabel:'Perfil',
        tabBarIcon: () => (
          <Ionicons name="person-circle-sharp" size={24} color="black" />
        ),
        headerTitle:'Perfil'
    }} />
      

   
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