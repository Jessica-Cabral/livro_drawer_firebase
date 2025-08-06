import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import Mytext from "../componentes/Mytext";
import Mytextinput from "../componentes/Mytextinput";
import MyButton from "../componentes/Mybutton";
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const TelaAutor = ({ navigation }) => {
  const [autor, setAutor] = useState("");
  const [id_autor, setId_autor] = useState("");

  async function inserirAutor() {
    try {
      const docRef = await addDoc(collection(db, "Autor"), {
        nome: autor,
      });
      Alert.alert("Informação", "Autor cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Atenção", "Erro ao cadastrar autor!");
    }
  }

  async function consultarAutor() {
    try {
      const colecao = collection(db, "Autor");
      const q = query(colecao, where("nome", "==", autor));
      const autores = await getDocs(q);
      const lista = autores.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setListaAutores(lista);
      console.log(listaAutores);
    } catch (error) {
      add - c;
      Alert.alert("Atenção", "Erro ao Buscar autor");
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
                  placeholder="Nome do autor"
                  style={{ flex: 1, marginRight: 10, width: 250, padding: 10 }}
                  value={autor}
                  onChangeText={setAutor}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={consultarAutor}>
                    <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={inserirAutor}>
                    <AntDesign name="adduser" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TelaAutor;
