import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import Mytextinput from "../componentes/Mytextinput";
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import AntDesign from "@expo/vector-icons/AntDesign";

const TelaGenero = ({ navigation }) => {
  const [genero, setGenero] = useState("");
  const [listaGenero, setListaGenero] = useState([]);

  async function inserirGenero() {
    try {
      const docRef = await addDoc(collection(db, "Genero"), {
        genero: genero,
      });
      Alert.alert("Informação", "Gênero cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Atenção", "Erro ao cadastrar gênero!");
    }
  }
  async function consultarGenero() {
    try {
      if (!genero) {
        Alert.alert("Atenção", "Digite um gênero para buscar");
        return;
      }
      const colecao = collection(db, "Genero");
      const q = query(colecao, where("genero", "==", genero));
      const generos = await getDocs(q);
      const lista = generos.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setListaGenero(lista);
      console.log(listaGenero);
    } catch (error) {
      Alert.alert("Atenção", "Erro ao buscar gênero");
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Mytextinput
                  placeholder="Nome do gênero"
                  style={{ flex: 1, marginRight: 10, width: 250, padding: 10 }}
                  value={genero}
                  onChangeText={setGenero}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={consultarGenero}>
                    <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={inserirGenero}>
                    <AntDesign name="adduser" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }}>
              <FlatList
                style={{ marginTop: 30 }}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                data={listaGenero}
                renderItem={({ item }) => (
                  <View style={styles.flatList}>
                    <Text> ID: {item.id}</Text>
                    <Text> Nome: {item.genero}</Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default TelaGenero;
