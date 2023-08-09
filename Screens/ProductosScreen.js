import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SectionList, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ropaJSON from '../Screens/products.json';

export default function ProductosScreen({ navigation }) {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const MAX_CARRITO = 5;

  useEffect(() => {
    setProductos(ropaJSON.products);
    cargarCarrito();
  }, []);

  const cargarCarrito = async () => {
    try {
      const carritoData = await AsyncStorage.getItem('carrito');
      if (carritoData) {
        setCarrito(JSON.parse(carritoData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const agregarAlCarrito = (producto) => {
    if (carrito.length < MAX_CARRITO) {
      const nuevoCarrito = [...carrito, producto];
      setCarrito(nuevoCarrito);
      guardarCarrito(nuevoCarrito);
    } else {
      alert('No se pueden agregar más productos al carrito.');
    }
  };

  const guardarCarrito = async (nuevoCarrito) => {
    try {
      await AsyncStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    } catch (error) {
      console.log(error);
    }
  };

  const datos = ropaJSON
  const secciones = [
    { title: "Tu carrito", data: datos.products }
  ]

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          'https://png.pngtree.com/thumb_back/fh260/background/20220916/pngtree-clouds-with-nice-natural-blue-sky-background-image_1463405.jpg',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Carrito')}>
        <Text>Carrito</Text>
      </TouchableOpacity>
      <SectionList
        sections={secciones}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
            <Text>{item.precio}</Text>

            <Image style={styles.imgg} source={{ uri: item.imagen }} />
            <Button
              title="Agregar al carrito"
              onPress={() => agregarAlCarrito(item)}
            />
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgg: {
    width: 100,
    height: 100,
  },
});
