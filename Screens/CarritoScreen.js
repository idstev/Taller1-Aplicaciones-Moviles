import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const datos = [
    {
      id: 1,
      nombre: 'Vestido',
      imagen: 'https://www.soniapena.com/images//colecciones/delmar//mobile/1230001.jpg?v=202306301717',
      precio: '$30',
    },
    {
      id: 2,
      nombre: 'Zapatos',
      imagen: 'https://vasari.vteximg.com.br/arquivos/ids/209809-1000-1000/VZC175118-TP-32.jpg?v=638030005065700000',
      precio: '$60',
    },
    {
      id: 3,
      nombre: 'Bolso',
      imagen: 'https://belcorpecuador.vtexassets.com/arquivos/ids/270903-800-800?v=638242743868930000&width=800&height=800&aspect=true',
      precio: '$45',
    },
    {
      id: 4,
      nombre: 'Bikini',
      imagen: 'https://modarm.com/medias/000005000000960046-1200-1.jpg?context=bWFzdGVyfGltYWdlc3wxODQ5NTZ8aW1hZ2UvanBlZ3xhRGswTDJobE9DODBOVGd3TXpBNE1UWXlPVGN5Tmk4d01EQXdNRFV3TURBd01EQTVOakF3TkRZdE1USXdNRjh4TG1wd1p3fDNmYzljNjVlMDA5ZTkyY2IyMTE0YmJiYmY5YzQ3YmUyNzdkNWEwNzYwODkyMDY3NDUxYTgzMGVhYmRmNWE1NDE',
      precio: '$20',
    },
    {
      id: 5,
      nombre: 'Jeans',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCL06P7AJceX-gZckVrAsmdhwaL_vceINtA&usqp=CAU',
      precio: '$25',
    },
    {
      id: 6,
      nombre: 'Pijama',
      imagen: 'https://moviesshopco.vtexassets.com/arquivos/ids/173557-800-800?v=638157857253500000&width=800&height=800&aspect=true',
      precio: '$15',
    },
    {
      id: 7,
      nombre: 'Gorras',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVckAQQF43TRLD3rFpcfj-Qh6UpjjVnd2N9g&usqp=CAU',
      precio: '$10',
    },
    {
      id: 8,
      nombre: 'Chompa',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXq5K-kuzNvZtFFfhGLwCrTiIm6h5IBxeCw&usqp=CAU',
      precio: '$30',
    },
    {
      id: 9,
      nombre: 'Gafa',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qcuyJvqCDYEJQwxyqz6msWTLmc6vE0c7Kg&usqp=CAU',
      precio: '$20',
    },
    {
      id: 10,
      nombre: 'Short',
      imagen: 'https://www.etafashion.com/medias/5000000944883-900x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wxNzM4NDd8aW1hZ2UvanBlZ3xhR1l3TDJnNU15ODBOREkzTXpFNU56TTRNemN4TUM4MU1EQXdNREF3T1RRME9EZ3pMVGt3TUhneE1qQXdYekF1YW5Cbnw5MDkwYjIxNzc3ZmVhNTVmZmE0ZGQ4YTg0NDVkNWU5ZGUyNWVjZGRkZWFlNjNmNDU1MDZjYTA0NGVlMDJhODI1',
      precio: '$19',
    },

  ];
  const renderFila = ({ item }) => (

    <View style={styles.fila}>
      <Text style={styles.celda}>{item.nombre}</Text>
      <Image style={styles.foto} source={{ uri: item.imagen }} />
      <Text style={styles.celda}>{item.precio}</Text>

      <TouchableOpacity style={styles.Icono}>
        <TouchableOpacity>
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
      <StatusBar style="auto" />
      <FlatList
        data={datos}
        renderItem={renderFila}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View style={[styles.fila, styles.titulos]}>
            <Text style={styles.texto}>Producto</Text>
            <Text style={styles.texto}>Foto</Text>
            <Text style={styles.texto}>Precio</Text>
            <Text style={styles.texto}>Botones</Text>
          </View>

        )}
      />
      <View style={styles.boton1}>
      <TouchableOpacity style={styles.botones}>
        
        <Text style={styles.boton}>Borrar</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.botones}>
      <Text style={styles.boton}>Comprar</Text>
      </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
    paddingVertical: 1,

  },
  celda: {
    width: 80,
    height: 40,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-around',


  },
  foto: {
    width: 109,
    height: 100,

  },
  titulos: {
    backgroundColor: '#9cf3e7',
    fontWeight: 'bold',

  },
  texto: {
    width: 85,
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold',

  },

  Icono: {
    flexDirection: 'row',
    paddingLeft: 6,


  },
  boton:{
    backgroundColor:  '#9cf3e7',
        width: 107,
        fontSize: 19,
        borderRadius: 10,
        padding: 9,
        height: 45,
  },
  boton1:{
    flexDirection:'row',
    justifyContent:'center',
  },
  botones:{
padding: 10,
  }


});