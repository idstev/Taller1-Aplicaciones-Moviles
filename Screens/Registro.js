import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfileScreen from './Perfil';
export default function App({ navigation }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    edad: '',
    contraseña: '',
  });

  async function recuperarDatosRegistro() {
    try {
      const registroJSON = await AsyncStorage.getItem('registro');
      if (registroJSON !== null) {
        const registro = JSON.parse(registroJSON);
        console.log('Datos de registro recuperados de AsyncStorage:', registro);
        // Hacer algo con los datos recuperados...
      }
    } catch (error) {
      console.error('Error al recuperar los datos del registro desde AsyncStorage:', error);
    }
  }

  async function IniciarSesion() {
    navigation.navigate('Iniciar');
  }

  async function navegar2() {
    const registro = {
      username: userData.username,
      email: userData.email,
      edad: userData.edad,
      contraseña: userData.contraseña,
    };

    try {
      // Guardar los datos en AsyncStorage
      await AsyncStorage.setItem('registro', JSON.stringify(registro));
      console.log('Datos de registro guardados en AsyncStorage');
      
      // Mostrar un mensaje de registro exitoso
      Alert.alert('Registro exitoso');
      
      // Restablecer los campos de texto a su estado inicial
      setUserData({
        username: '',
        email: '',
        edad: '',
        contraseña: '',
      });
    } catch (error) {
      console.error('Error al guardar los datos en AsyncStorage:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ciudad}>Registro</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Nombre de usuario'
          placeholderTextColor='white'
          onChangeText={(text) => setUserData({ ...userData, username: text })}
          value={userData.username}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Correo electronico'
          placeholderTextColor='white'
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          value={userData.email}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Edad'
          placeholderTextColor='white'
          onChangeText={(text) => setUserData({ ...userData, edad: text })}
          value={userData.edad}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Contraseña'
          placeholderTextColor='white'
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserData({ ...userData, contraseña: text })
          }
          value={userData.contraseña}
        />
      </View>

      <View style={styles.botones}>
        <View style={styles.boton}>
          <Button title='Registrarse' color={'green'} onPress={navegar2} />
        </View>
        <View style={styles.boton}>
          <Button title='Iniciar Sesion' onPress={IniciarSesion} />
        </View>
      </View>

      <StatusBar style='auto' />
      <FlatList
             data={userData}
             renderItem={({item}) =>(
              <UserProfileScreen
              datos={item}
              /> 
  )}
             />
    </View>
  );
}

const styles = StyleSheet.create({
  botones: {
    flexDirection: 'row',
  },
  boton: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ciudad: {
    paddingBottom: 10,
    fontSize: 40,
    color: '#3c5493',
  },
  txtInput: {
    height: 50,
    width: '100%',
    color: '#acff59',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: 'black',
  },
  imagenUsuario: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
});
