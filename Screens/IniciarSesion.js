import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';


export default function IniciarSesion({navigation}) {

    function Iniciar(){
        navigation.navigate('home')
    }
    
  return (

    <View style={styles.container}>
      <Text style={styles.ciudad}>Iniciar Sesion</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder='Nombre'
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
      <View style={styles.inputContainer}>
      <Button
            title='Ingresar'
            color={'green'}
            onPress={()=> Iniciar()}
            />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ciudad: {
    paddingBottom:10,
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
