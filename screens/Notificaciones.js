import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import CustomCard from '../components/CustomCard'
import MyCalendar from "../components/MyCalendar"

const Notificaciones = () => {
  return (

    <View style={styles.fondoVerde}>
      <Text style={styles.title}>
      Calendario
      </Text>


      <ImageBackground style={styles.headerContent} source={require('../assets/pantalla9.png')}>

      <View style={styles.navSuperior}>

      </View>

      
    <MyCalendar/>
        
      </ImageBackground>
    </View>

    // <View style={styles.container} >


    //   <ImageBackground style={styles.headerContent} source={require('../assets/pantalla4.png')}>
    //   <CustomCard title="Control de Plagas" imageSource={require('../assets/logopp.jpg')}/>
    //   <CustomCard title="Abonar" imageSource={require('../assets/logopp.jpg')}/>

    //   <CustomCard title="Guadañar" imageSource={require('../assets/logopp.jpg')}/>
    //   </ImageBackground>

    // </View>
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

  navSuperior: {
    width: "95%",
    height: 70,
    backgroundColor: "red",
    
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
    backgroundColor: "red"
  },

  headerContent: {
    width: "100%",
    height: "100%",
    marginTop: 170,
    backgroundColor: "red",
    borderTopRightRadius: 200,
    marginBottom: 50,
    justifyContent: "center",
    paddingTop: 150,
    overflow: "hidden",
    alignItems: "center"
  }

})

export default Notificaciones

