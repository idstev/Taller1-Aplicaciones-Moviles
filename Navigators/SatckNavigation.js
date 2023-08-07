import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CarritoScreen from '../Screens/CarritoScreen';
import HomeScreen from '../Screens/HomeScreen';
import IniciarSesion from '../Screens/IniciarSesion';
import Perfil from '../Screens/Perfil';
import ProductosScreen from '../Screens/ProductosScreen';
import Registro from '../Screens/Registro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Registro'>
      <Stack.Screen name='CarritoScreen' component={CarritoScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='IniciarSesion' component={IniciarSesion} />
      <Stack.Screen name='Perfil' component={Perfil} />
      <Stack.Screen name='ProductosScreen' component={ProductosScreen} />
      <Stack.Screen name='Registro' component={Registro} />
      {/* Otras pantallas en el stack si las tienes */}
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
