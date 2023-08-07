import { View, Text, StyleSheet, SectionList, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ropaJSON from './ropa.json'
import CarritoScreen from '../Screens/CarritoScreen'
export default function ProductosScreen({navigation}) {
  const datos = ropaJSON
  const secciones = [
    { title: "Tu carrito", data: datos.productos }
  ]

function Carrito() {
  navigation.navigate('Carrito');
}


  

  return (
    <ImageBackground style={styles.container}
      source={{ uri: "https://png.pngtree.com/thumb_back/fh260/background/20220916/pngtree-clouds-with-nice-natural-blue-sky-background-image_1463405.jpg" }}>
        <TouchableOpacity onPress={Carrito}>
        <Text>Carrito</Text>
      </TouchableOpacity>
      <SectionList
        sections={secciones}
        renderItem={({ item }) => (
          < View>
            <Text>{item.nombre} </Text>
            <Text>{item.descripcion} </Text>
            <Text>{item.precio} </Text>

            <Image style={styles.imgg} source={{ uri: item.imagen }} />
            <Button
              title='Agregar al carrito'

            />
          </View>
        )}
      />
      
    </ImageBackground>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtC: {
    color: "#400080",
    fontSize: 20,
    textAlign: "right"
  },
  imgg: {
    width: 100,
    height: 100

  },
  container2: {

    padding: 0,
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }
});