import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import CarritoScreenStack from '../Screens/CarritoScreen'
import HomeScreenStack from '../Screens/HomeScreen';
import IniciarSesionStack from '../Screens/IniciarSesion';
import PerfilStack from '../Screens/Perfil'
import ProductosScreenStack from '../Screens/ProductosScreen';
import RegistroStack from '../Screens/Registro';
const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator initialRouteName='Registro'>
            <Stack.Screen name='carrito' component={CarritoScreenStack}/>
            <Stack.Screen name='HomeScreen' component={HomeScreenStack}/>
            <Stack.Screen name='IniciarSesion' component={IniciarSesionStack}/>
            <Stack.Screen name='Perfil' component={PerfilStack}/>
            <Stack.Screen name='ProductosScreen' component={ProductosScreenStack}/>
            <Stack.Screen name='Registro' component={RegistroStack}/>
        </Stack.Navigator>
    )
}

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    )
}