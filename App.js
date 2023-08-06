
import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '../Taller1-Aplicaciones-Moviles/Navigators/BottomTab';

export default function App() {
  return (
<BottomNavigation/>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});