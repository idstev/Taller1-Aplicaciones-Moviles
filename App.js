
import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '../prueba/Navigators/BottomTab.js';

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