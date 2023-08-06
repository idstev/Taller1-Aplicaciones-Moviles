import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View, Alert} from 'react-native';

export default function App({navigation}) {

  function IniciarSesion(){
    navigation.navigate('Iniciar');
}
function navegar2(){
 Alert.alert("Registro exitoso");
}
  return (
    <View style={styles.container}>
  
      <Text style={styles.ciudad}>Registro</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Nombre de usuario'
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Correo electronico'
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Edad'
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Contraseña'
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      </View>

<View style={styles.botones}>
      <View style={styles.boton}>
      <Button
            title='Registrarse'
            color={'green'}
            onPress={()=> navegar2()}
            />
            
      </View>
      <View style={styles.boton}>
      <Button
            title='Iniciar Sesion'
            onPress={()=> IniciarSesion()}
            
            />
      </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    botones: {
        flexDirection: 'row',

    },
    boton:{
        padding:10,

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
    color: "#3c5493",
  },
  txtInput: {
    height: 50,
    width: "100%",
    color: "#acff59",
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
