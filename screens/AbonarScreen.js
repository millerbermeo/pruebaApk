import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import Tarject from '../components/Tarject';

const AbonarScreen = ({ navigation }) => {
  return (
    <View style={styles.fondoVerde}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/r2.png')} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>Abonar</Text>
      </View>
      <ImageBackground style={styles.headerContent} source={require('../assets/pantalla5.png')}>
        <Tarject title="Fecha: 19-05-2023" imageSource="calendar" />
        <Tarject title="Trabajadores: 3" imageSource="tree" />
        <Tarject title="Precio: 90.000 día" imageSource="calendar" />
      </ImageBackground>
    </View>
  );
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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop: 70, 
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 25,
    backgroundColor: "white",
    borderRadius: 999,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  fondoVerde: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(166, 3, 3, 3)',
  },

  headerContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
marginTop: 30,
    borderTopRightRadius: 200,
    marginBottom: 50,
    justifyContent: "flex-start",
    paddingTop: 120,
    overflow: "hidden",
  },
});

export default AbonarScreen;
