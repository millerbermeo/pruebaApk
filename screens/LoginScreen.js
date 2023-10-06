import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [finca, setFinca] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        navigation.navigate('HomeStack');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const register = () => {
        navigation.navigate('Register');
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/pantalla2.png')}>
           <View style={styles.fondo}>
                <Text style={styles.title}>BIENVENIDO</Text>
                <Text style={styles.sub}>Cafe Crono</Text>

                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'email' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor="white"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                    />
                </View>

                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'password' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="lock" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Documento"
                        placeholderTextColor="white"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}
                    />
                    <TouchableOpacity
                        onPress={toggleShowPassword}
                        style={styles.showPasswordButton}
                    >
                        <Icon
                            name={showPassword ? "eye-slash" : "eye"}
                            style={styles.showPasswordIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'finca' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Finca"
                        placeholderTextColor="white"
                        onChangeText={(text) => setFinca(text)}
                        value={finca}
                        onFocus={() => setFocusedInput('finca')}
                        onBlur={() => setFocusedInput(null)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={register}>
                        <Text style={styles.footerTextUno}>Crear Cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RecuperarPassword')}>
                        <Text style={styles.footerText}>
                            Olvidaste tu Contraseña?
                        </Text>
                    </TouchableOpacity>
                </View>
           </View>
        </ImageBackground>
    );
};

export default LoginScreen;
