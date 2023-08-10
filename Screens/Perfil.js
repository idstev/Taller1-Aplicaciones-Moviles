import { View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

function RegistroScreen() {
  const [registro, setRegistro] = useState(null);
  const sections = [
    { id: '1', title: 'Deseados', icon: 'favorite' },
    { id: '2', title: 'Favoritos', icon: 'favorite-border' },
    { id: '3', title: 'Historial', icon: 'history' },
    { id: '4', title: 'Cupones', icon: 'local-offer' },
  ];
  const renderSectionItem = ({ item }) => (
    <View style={styles.sectionItem}>
      <MaterialIcons name={item.icon} size={24} color="#333" />
      <Text style={styles.sectionTitle}>{item.title}</Text>
    </View>
  );
  useEffect(() => {
    async function recuperarDatosRegistro() {
      try {
        const registroJSON = await AsyncStorage.getItem('registro');
        if (registroJSON !== null) {
          const registro = JSON.parse(registroJSON);
          console.log('Datos de registro recuperados de AsyncStorage:', registro);
          setRegistro(registro); // Actualiza el estado con los datos recuperados
        }
      } catch (error) {
        console.error('Error al recuperar los datos del registro desde AsyncStorage:', error);
      }
    }
    recuperarDatosRegistro();
  }, []); // El segundo parámetro [] asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <ImageBackground resizeMode="cover" style={styles.image}
      source={{ uri: "https://img.freepik.com/fotos-premium/fondo-blanco-blanco-textura-pared-cemento-grunge-bandera-fondo-diseno-interior_7190-155.jpg?w=2000" }}>
      <View>
        <Image style={styles.imgg}
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/007/037/420/non_2x/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-in-circle-round-black-color-illustration-image-solid-outline-style-vector.jpg" }}></Image>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Datos de Registro:</Text>
        {registro && (
          <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Nombre: {registro.username}</Text>
            <Text style={{ fontSize: 20 }}>Email: {registro.email}</Text>
            <Text style={{ fontSize: 20 }}>Edad: {registro.edad}</Text>
            {/* Agrega aquí más campos según la estructura de tus datos */}
          </View>
        )}
      </View>
      <View style={styles.container2}>
        <FlatList
          data={sections}
          renderItem={renderSectionItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sectionItem}
        />
      </View>
    </ImageBackground>
  );
}

export default RegistroScreen;

const styles = StyleSheet.create({
  sectionItem: {
    alignItems: 'center',
  },
  sectionItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    paddingLeft: 40,
    flexDirection: "column"
  },
  imgg: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  imgA: {
    width: 50,
    height: 50,
    flexDirection: "column"
  },
  imgB: {
    width: 300,
    height: 150,
    flexDirection: "column"
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  sectionList: {
    marginTop: 10,
  },
  sectionItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 5,
  },
  image: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },

});