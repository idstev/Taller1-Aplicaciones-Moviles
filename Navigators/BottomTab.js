import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IniciarSesion from '../Screens/IniciarSesion';
import Registro from '../Screens/Registro';
import Perfil from '../Screens/Perfil';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return ( 
        <Tab.Navigator >
            <Tab.Screen name='Iniciar' component={IniciarSesion}></Tab.Screen>
            <Tab.Screen name='Registro' component={Registro}></Tab.Screen>
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
