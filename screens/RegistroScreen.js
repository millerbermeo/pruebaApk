import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../style';

const RegistroScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNombreFocused, setIsNombreFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const handleRegistro = () => {

    navigation.navigate('Login'); 
  };

  return (
    <ImageBackground style={styles.containerRegister} source={require('../assets/pantalla2.png')}>
              <View style={styles.fondo}>
      <Text style={styles.titleRegister}>Registrar</Text>

      <View style={[styles.inputContainer, { backgroundColor: isNombreFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="user" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="white"
          onChangeText={(text) => setNombre(text)}
          value={nombre}
          onFocus={() => setIsNombreFocused(true)}
          onBlur={() => setIsNombreFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isEmailFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="envelope" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isPasswordFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isConfirmPasswordFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          placeholderTextColor="white"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleRegistro}
      >
        <Text style={styles.loginButtonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.footerText}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegistroScreen;
