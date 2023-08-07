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
                            source={{ uri: "https://img.freepik.com/psd-gratis/maqueta-tripulacion-tres-mezclas-hombre_126278-130.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/psd-gratis/maqueta-camiseta-hombre-negro-simple_53876-57893.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/psd-gratis/vista-frontal-camiseta-blanca-aislada_125540-1194.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>Faldas</Text>
                    <View style={styles.contenedorimg}>
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/retrato-moda-dos-modelos-morenas-sonrientes-ropa-casual-verano-hipster-aislado-blanco_158538-12141.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/mujer-morena-rizada-gafas-sol-mirando-otro-lado-mientras-baila-pared-blanca_197531-6504.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/retrato-moda-verano-moda-mujer-rubia-estilo-vistiendo-gafas-sol-mirada-total-atras_291049-724.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>Pantalones</Text>
                    <View style={styles.contenedorimg}>
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/pantalones_1203-8092.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=sph" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/pantalones-cortos-hombres-ocasionales_1203-8186.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=ais" }}
                            style={styles.imginit}
                        />
                        <Image
                            source={{ uri: "https://img.freepik.com/foto-gratis/hombre-vestido-pantalones-marrones-cerca_53876-102239.jpg?size=626&ext=jpg&uid=R22905582&ga=GA1.2.1888318029.1691366801&semt=ais" }}
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