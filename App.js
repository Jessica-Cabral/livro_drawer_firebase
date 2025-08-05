import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/home';
import LivroScreen from './app/livros';
import AutorScreen from './app/autor';
import EditoraScreen from './app/editora';
import GeneroScreen from './app/genero';
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
            )
          }}
        />
        <Drawer.Screen 
          name="Livros" 
          component={LivroScreen} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="book" size={size} color={focused ? '#7cc' : '#ccc'} />
            )
          }}
        />
        <Drawer.Screen 
          name="Autores" 
          component={AutorScreen} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="person" size={size} color={focused ? '#7cc' : '#ccc'} />
            )
          }}
        />
        <Drawer.Screen 
          name="Editoras" 
          component={EditoraScreen} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="business" size={size} color={focused ? '#7cc' : '#ccc'} />
            )
          }}
        />
        <Drawer.Screen 
          name="Gêneros" 
          component={GeneroScreen} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="pricetag" size={size} color={focused ? '#7cc' : '#ccc'} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}