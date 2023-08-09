
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistroScreen() {

  const [registro, setRegistro] = useState(null);

console.log(registro)

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

    <View>

      <Text>Datos de Registro:</Text>

      {registro && (

        <View>

          <Text>Nombre: {registro.username}</Text>

          <Text>Email: {registro.email}</Text>

          {/* Agrega aquí más campos según la estructura de tus datos */}

        </View>

      )}

    </View>

   

  );

}

 

export default RegistroScreen;

 

 

const styles = StyleSheet.create({

  container: {

    flexGrow: 1,

    padding: 20,

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

 