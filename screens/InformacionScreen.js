import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomCard from '../components/CustomCard'

const InformacionScreen = () => {
    return (

        <View style={styles.fondoVerde}>



            <Text style={styles.title}>
                Informacion
            </Text>

            <ImageBackground style={styles.headerContent} source={require('../assets/pantalla6.png')}>



                <View style={styles.infoText}>
                    <Text style={styles.infoTextText}>
                        El abono del café Generalmente implica la aplicación de fertilizante orgánicos e inorgánicos al suelo.
                        Los fertilizantes orgánicos pueden incluir compost estiércol restos de cultivos u otros materiales naturales ricos en nutrientes
                        Los fertilizantes inorgánicos por otro lado Son productos químicos sintéticos que contienen nutrientes específicos como nitrógeno fósforo y potasio
                    </Text>

                    <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Como se hace</Text>
            </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 0,
    },

    button: {
        backgroundColor: 'blue',
        marginVertical: 10,
        height: 50,
        borderRadius: 45,
        width: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    title: {
        position: "absolute",
        top: 80,
        width: "100%",
        fontSize: 30,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },

    fondoVerde: {
        width: "100%",
        height: "100%",
        backgroundColor: "#142601"
    },

    headerContent: {
        width: "100%",
        height: "100%",
        marginTop: 210,
        backgroundColor: "red",
        borderTopRightRadius: 200,
        marginBottom: 50,
        justifyContent: "flex-start",
        paddingTop: 120,
        overflow: "hidden"
    },

    infoText: {
        backgroundColor: 'rgba(166, 3, 3, 0.6)',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
    },

    infoTextText: {
        fontSize: 22,
        color: "white"
    },

})

export default InformacionScreen