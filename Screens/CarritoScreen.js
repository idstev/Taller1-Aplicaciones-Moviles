import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CarritoScreen() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    cargarCarrito();
    console.log(carrito);
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
  const guardarCarrito = async (nuevoCarrito) => {
    try {
      await AsyncStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    } catch (error) {
      console.log(error);
    }
  };
  const eliminarProducto = async (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    guardarCarrito(carrito);
  };
  const renderFila = ({ item, index }) => (
    <View style={styles.fila}>
      <Text style={styles.celda}>{item.nombre}</Text>
      <Image style={styles.foto} source={{ uri: item.imagen }} />
      <Text style={styles.celda}>{item.precio}</Text>
      <TouchableOpacity style={styles.Icono}>
        <TouchableOpacity onPress={async () => await eliminarProducto(index)}>
          <View style={styles.Icono}>
            <Ionicons name="trash" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Icono}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Icono}>
            <AntDesign name="minussquare" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={carrito}
        renderItem={renderFila}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={[styles.fila, styles.titulos]}>
            <Text style={styles.texto}>Producto</Text>
            <Text style={styles.texto}>Foto</Text>
            <Text style={styles.texto}>Precio</Text>
            <Text style={styles.texto}>Eliminar</Text>
            <StatusBar style="auto" />
          </View>
        )}
      />
      <View style={styles.boton1}>
        <TouchableOpacity style={styles.botones}>
          <Text style={styles.boton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingVertical: 10,
  },
  celda: {
    width: 80,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'space-around',
  },
  foto: {
    width: 80,
    height: 100,
  },
  titulos: {
    backgroundColor: '#9cf3e7',
    fontWeight: 'bold',
  },
  texto: {
    width: 85,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  Icono: {
    flexDirection: 'row',
  },
  boton1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#9cf3e7',
    width: 107,
    fontSize: 19,
    borderRadius: 10,
    padding: 9,
    height: 45,
  },
  botones: {
    padding: 10,
  }
});