
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistroScreen() {

  const [registro, setRegistro] = useState(null);
  const sections  = [
    { id: '1', title: 'Deseados', icon: 'favorite' },
    { id: '2', title: 'Favoritos', icon: 'favorite-border' },
    { id: '3', title: 'Historial', icon: 'history' },
    { id: '4', title: 'Cupones', icon: 'local-offer' },
  ];
  
  const UserProfileScreen = () => {
    const renderSectionItem = ({ item }) => (
      <View style={styles.sectionItem}>
        <MaterialIcons name={item.icon} size={24} color="#333" />
        <Text style={styles.sectionTitle}>{item.title}</Text>
      </View>
    );
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
<ImageBackground>
<View>

<Text>Datos de Registro:</Text>

  {registro && (

  <View>

  </View>

)}

</View>
<StatusBar Style="Auto"/>
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={{ uri: userDato.profileImage }} />
      <Text style={styles.name}>{registro.username}</Text>
      <Text style={styles.email}>{registro.email}</Text>
      <Text style={styles.email}>{registro.edad}</Text>
      

      <Text style={styles.subTitle}>Información de contacto:</Text>
      <Text style={styles.info}>Dirección: {userDato.address}</Text>
      <Text style={styles.info}>Teléfono: {userDato.phoneNumber}</Text>



      <Text style={styles.subTitle}>Secciones:</Text>
      <FlatList
        data={sections}
        renderItem={renderSectionItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sectionList}
      />
    </ScrollView>
    
    </ImageBackground>
   

   

  );

}}

 

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

 