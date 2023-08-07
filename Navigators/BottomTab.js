import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Registro from '../Screens/Registro';
import Perfil from '../Screens/Perfil';
import HomeScreen from '../Screens/HomeScreen';
import ProductosScreen from '../Screens/ProductosScreen';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Registro'>
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            <Tab.Screen name='Registro' component={Registro}></Tab.Screen>
            <Tab.Screen name='Productos' component={ProductosScreen}></Tab.Screen>
            <Tab.Screen name='Perfil' component={Perfil}></Tab.Screen>

        </Tab.Navigator>
    )

}
export default function BottomNavigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
