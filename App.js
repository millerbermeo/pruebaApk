import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FinanzasScreen from './screens/FinanzasScreen';
import Notificaciones from './screens/Notificaciones';
import RegistroScreen from './screens/RegistroScreen';
import StartScreen from './screens/StartScreen';
import AbonarScreen from './screens/AbonarScreen';
import InformacionScreen from './screens/InformacionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTab" // Renamed to "HomeTab"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={30} color="gray" />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Labores',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Entypo name="network" size={30} color="gray" />
        ),
      }}
    />
    <Tab.Screen
      name="Finanzas"
      component={FinanzasScreen}
      options={{
        tabBarLabel: 'Finanzas',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="finance" size={30} color="gray" />
        ),
      }}
    />
    <Tab.Screen
      name="Notificaciones"
      component={Notificaciones}
      options={{
        tabBarLabel: 'Notificaciones',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="bell" size={30} color="gray" />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para iniciar sesión
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Abonar"
          component={AbonarScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="info"
          component={InformacionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack" // Renamed to "HomeStack"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistroScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Notificaciones',
            tabBarIcon: ({ color, size }) => (
              <Feather name="bell" size={30} color="gray" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
