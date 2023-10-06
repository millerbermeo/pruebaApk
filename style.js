import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    resizeMode: "cover",
  },

  fondo:{
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    paddingTop: 160,
    paddingBottom: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  containerRegister: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 100,
    paddingBottom: 100,
    flex: 1,
    resizeMode: "cover",
  },
  
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center"
  },

  titleRegister: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50
  },

  sub: {
    fontSize: 35,
    fontWeight: '700',
    color: '#730202',
    marginBottom: 70,
    textAlign: "center",
  },


  // image: {
  //   width: 225,
  //   height: 210,
  //   marginBottom: 30,
  // },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    width: '100%',
  },
  icon: {
    fontSize: 35,
    color: '#ccc',
  },


  input: {
    flex: 1,
    fontSize: 18,
    height: 55,
    marginLeft: 10,
    color: "white",
  },

  showPasswordIcon: {
    fontSize: 30,
    color: "white"
  },


  loginButton: {
    backgroundColor: '#730202',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 0,
    width: 200,

  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
    alignItems: "center",
    
    
  },
  footerTextUno: {
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 1,
    marginTop: 50,
    fontWeight: "bold",
    borderColor: "white"
  },

  footerText: {
    fontSize: 16,
    color: '#730202',
    borderBottomWidth: 1,
    borderColor: "#730202",
  },

});