import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import MyCalendar from '../components/MyCalendar';

const HomeScreen = ({ navigation }) => {
  const handleRegistro = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground style={styles.container} source={require('../assets/Pantalla3.png')}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require('../assets/perfil.png')}
              style={styles.imagePerfil}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Hola Miller!</Text>
              <View style={styles.location}>
                <EvilIcons name="location" size={25} color="white" />
                <Text style={styles.locationText}>Pitalito</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.logout} onPress={handleRegistro}>
              <AntDesign name="logout" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.farmName}>Finca VILLA ESPERANZA</Text>
        </View>
        <Text style={styles.title}>Bienvenido a la Pantalla de Inicio</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Labores Agronómicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Finanzas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingTop: 0,
    padding: 3,
    paddingBottom: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 210,
    backgroundColor: 'rgba(20, 38, 1, 0.8)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 20,
    paddingBottom: 5,
  },
  headerContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imagePerfil: {
    width: 90,
    height: 90,
  },
  userInfo: {
    flex: 1,
    marginLeft: 20,
  },
  userName: {
    fontSize: 25,
    color: "white",
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  locationText: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  logout: {
    paddingLeft: 10,
  },
  farmName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 50,
    color: "white",
  },
  buttonContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(20, 38, 1, 0.8)',
    paddingVertical: 25,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 45,
    width: 340,
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
