import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import CarritoScreen from '../Screens/CarritoScreen'
import HomeScreen from '../Screens/HomeScreen';
import IniciarSesion from '../Screens/IniciarSesion';
import Perfil from '../Screens/Perfil'
import ProductosScreen from '../Screens/ProductosScreen';
import Registro from '../Screens/Registro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="WELCOME" 
            /*
            screenOptions={{
                headerShown: false
            }}
            */
        >
            <Stack.Screen name='HOMETAB' component={ MyTabs } />
            <Stack.Screen name='WELCOME' component={ WelcomeScreen} />
        </Stack.Navigator>
    )
}

export default function MainNavigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}