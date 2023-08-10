import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CarritoScreen({ navigation }) {
  
  const [carrito, setCarrito] = useState([]);

  const [modalVisvible, setmodalVisvible] = useState(false)

  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);

  const agregarProducto = () => {
    if (producto && precio > 0 && cantidad > 0) {
      const productoNuevo = {
        id: Date.now(),
        nombre: producto,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad),
        iva: parseFloat(iva),
      };
  
      setCarrito([...carrito, productoNuevo]);
      setTotal(total + productoNuevo.precio * productoNuevo.cantidad);
      setProducto('');
      setPrecio('');
      setCantidad(1);
      setIva(total * 0.12);
    }
  };
  
  const cantidadmas = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += 1;
    setCarrito(nuevoCarrito);
    calcularTotal();
  };
  
  const cantidadmenos = (index) => {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
      setCarrito(nuevoCarrito);
      calcularTotal();
    }
  };
  
  const calcularTotal = () => {
    let newTotal = 0;
    carrito.forEach((item) => {
      newTotal += item.precio * item.cantidad;
    });
    setTotal(newTotal);
    setIva(newTotal * 0.12);
  };
  

  const mensaje = () => {
    Alert.alert("Se ha confirmado su compra")
    navigation.navigate('Home');
    setmodalVisvible(false);
  }

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

  useEffect(() => {
    if (modalVisvible) {
      const timeout = setTimeout(() => {
        setmodalVisvible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [modalVisvible]);

  const closeModal = () => {
    setmodalVisvible(false);
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
    guardarCarrito(nuevoCarrito);
  };

  const renderFila = ({ item, index }) => (
    <View style={styles.fila}>
      <Text style={styles.celda}>{item.nombre}</Text>
       <Image style={styles.foto} source={{ uri: item.imagen }} /> 
      <Text style={styles.celda}>{item.precio}</Text>
      <View style={styles.Icono}>
        <TouchableOpacity onPress={async () => await eliminarProducto(index)}>
          <View style={styles.Icono}>
            <Ionicons name="trash" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cantidadmas(index)}>
          <View style={styles.Icono}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.cantidad2}>{item.cantidad}</Text>

        <TouchableOpacity onPress={() => cantidadmenos(index)}>
          <View style={styles.Icono}>
            <AntDesign name="minussquare" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
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
          </View>
        )}
      />
      <View style={styles.boton1}>
        <TouchableOpacity
          onPress={() => setmodalVisvible(!modalVisvible)}
          style={styles.botones}>
          <Text style={styles.boton}>Comprar</Text>
        </TouchableOpacity>
        <Modal visible={modalVisvible} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¿Desea confirmar la compra?</Text>
              <Text style={styles.total}>Total de Todo: ${total.toFixed(2)}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={mensaje}>
                <Text>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  total: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});