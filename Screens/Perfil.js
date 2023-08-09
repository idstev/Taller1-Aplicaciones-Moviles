import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const userDato = {
  name: "John Doe",
  email: "johndoe@example.com",
  profileImage: "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg",
  address: "123 Main St, City, Country",
  phoneNumber: "555-123-4567",
};

const sections  = [
  { id: '1', title: 'Deseados', icon: 'favorite' },
  { id: '2', title: 'Favoritos', icon: 'favorite-border' },
  { id: '3', title: 'Historial', icon: 'history' },
  { id: '4', title: 'Cupones', icon: 'local-offer' },
];

const UserProfileScreen = (prop) => {
  const renderSectionItem = ({ item }) => (
    <View style={styles.sectionItem}>
      <MaterialIcons name={item.icon} size={24} color="#333" />
      <Text style={styles.sectionTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground>
<StatusBar Style="Auto"/>
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={{ uri: userDato.profileImage }} />
      <Text style={styles.name}>{prop.datos.userData.username}</Text>
      <Text style={styles.email}>{prop.datos.userData.email}</Text>
      <Text style={styles.email}>{prop.datos.userData.edad}</Text>
      <Text style={styles.email}>{prop.datos.userData.contraseña}</Text>

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
};

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

export default UserProfileScreen;
