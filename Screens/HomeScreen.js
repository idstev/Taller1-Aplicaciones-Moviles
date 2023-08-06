import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ROSÉ</Text>
            <Text style={{ fontWeight: 'bold' }}>Tienda de Ropa</Text>
            <View style={styles.container2}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Productos</Text>
                <View style={styles.container3}>
                    <Text>Camisetas</Text>
                    <View style={styles.contenedorimg}>
                        <Image
                            source={require ('./assets/img/camisa_primero.jpg')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/camisa_segundo.jpg')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/camisa_tercero.jpg')}
                            style={styles.imginit}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>Faldas</Text>
                    <View style={styles.contenedorimg}>
                    <Image
                            source={require ('./assets/img/falda_primero.jpg')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/falda_segundo.jpeg')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/falfa_tercero.webp')}
                            style={styles.imginit}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>Pantalones</Text>
                    <View style={styles.contenedorimg}>
                    <Image
                            source={require ('./assets/img/pantalon_primero.png')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/Pantalon_segundo.webp')}
                            style={styles.imginit}
                        />
                        <Image
                            source={require ('./assets/img/pantalon_tercero.webp')}
                            style={styles.imginit}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    container2: {
        height: '90%',
        width: '100%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#d5ffff',
    },
    container3: {
        height: '30%',
        width: '100%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    contenedorimg: {
        flexDirection: 'row',
    },
    imginit: {
        width: 90,
        height: 100,
    }
})