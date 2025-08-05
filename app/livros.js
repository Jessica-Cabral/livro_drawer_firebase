import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";

const LivroScreen = ({ navigation }) => {
  const [consulta, setConsulta] = useState('');
  const [livros, setLivros] = useState([
    { id: 1, titulo: 'PHP', autor: 'Pedro', editora: 'Editora A', genero: 'Romance' },
    { id: 2, titulo: 'React', autor: 'Ricardo', editora: 'Editora B', genero: 'Ficção' },
    { id: 3, titulo: 'Java', autor: 'Carol', editora: 'Editora C', genero: 'Aventura' },
    { id: 4, titulo: 'Código Limpo', autor: 'Naty', editora: 'Editora D', genero: 'Drama' },
    { id: 5, titulo: 'Programador', autor: 'Thiago', editora: 'Editora E', genero: 'Suspense' },
  ]);

  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(consulta.toLowerCase()) ||
    livro.autor.toLowerCase().includes(consulta.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Livros</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar livro..."
        value={consulta}
        onChangeText={setConsulta}
      />

      <ScrollView style={styles.lista}>
        {livrosFiltrados.map(livro => (
          <TouchableOpacity key={livro.id} style={styles.item}>
            <Text style={styles.itemTitulo}>{livro.titulo}</Text>
            <Text>Autor: {livro.autor}</Text>
            <Text>Editora: {livro.editora}</Text>
            <Text>Gênero: {livro.genero}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  input: {
    width:"90%",
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  lista: {
    flex: 1,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LivroScreen;