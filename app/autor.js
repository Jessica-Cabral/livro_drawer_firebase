import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AutorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Autores</Text>
      <TextInput
      style={styles.input}
      placeholder='Digite o autor...' />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
    input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default AutorScreen;