import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomCard from '../components/CustomCard'

const SettingsScreen = () => {
  return (

    <View style={styles.fondoVerde}>



      <Text style={styles.title}>
        Labores Agronómicas
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>AÑADIR +</Text>
      </TouchableOpacity>

      <ImageBackground style={styles.headerContent} source={require('../assets/pantalla4.png')}>



        <CustomCard title="Control de Plagas" imageSource={require('../assets/r1.png')} />
        <CustomCard title="Abonar" imageSource={require('../assets/r2.png')} />
        <CustomCard title="Guadañar" imageSource={require('../assets/r3.png')} />


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
    position: "absolute",
    top: 140,
    right: 20,
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
  }

})

export default SettingsScreen