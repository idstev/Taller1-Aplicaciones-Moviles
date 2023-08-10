
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistroScreen() {
  const [registro, setRegistro] = useState(null);
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

    <View style={styles.container}>
      <Text style={{fontSize:20}}>Datos de Registro:</Text>
      <View>
        {registro && (
          <View style={styles.container2}>
            <Image style={styles.imgg}
              source={{ uri: "https://static.vecteezy.com/system/resources/previews/007/037/420/non_2x/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-in-circle-round-black-color-illustration-image-solid-outline-style-vector.jpg" }}></Image>
            <View style={styles.container2}>
              <Text style={{fontSize:20}}>Nombre: {registro.username}</Text>
              <Text style={{fontSize:20}}>Email: {registro.email}</Text>
              <Text style={{fontSize:20}}>Edad: {registro.edad}</Text>
            </View>
          </View>
        )}
      </View>
    </View>

  );
}

export default RegistroScreen;




const styles = StyleSheet.create({

  container: {
    backgroundColor:'#d7ffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  },
  imgg: {
    width: '100%',
    height: '20%',
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



    flex: 1,

    justifyContent: 'center',

  },

});