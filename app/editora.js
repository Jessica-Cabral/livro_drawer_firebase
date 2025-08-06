import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList, StyleSheet,
} from "react-native";
import Mytextinput from "../componentes/Mytextinput";
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import AntDesign from "@expo/vector-icons/AntDesign";

const TelaEditora = ({ navigation }) => {
  const [editora, setEditora] = useState("");
   const [listaEditoras, setListaEditoras] = useState ([]);

  async function inserirEditora() {
    try {
      const docRef = await addDoc(collection(db, "Editora"), {
        editora: editora,
      });
      Alert.alert("Informação", "Editora cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Atenção", "Erro ao cadastrar editora!");
    }
  }
   async function consultarEditoras() {
       try {
        const colecao = collection(db, "Editora");
        const q = query(colecao, where("editora", "==", editora));
        const editoras = await getDocs(q);
        const lista = editoras.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setListaEditoras(lista);
        console.log(listaEditoras);
      } catch (error) {
        Alert.alert("Atenção", "Erro ao buscar editora");
        console.log(error)
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
                  placeholder="Nome da editora"
                  style={{ flex: 1, marginRight: 10, width:250, padding: 10 }}
                  value={editora}
                  onChangeText={setEditora}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={consultarEditoras}>
                    <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={inserirEditora}>
                    <AntDesign name="adduser" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }}>
                <FlatList
                  style={{ marginTop: 30 }}
                  contentContainerStyle={{ paddingHorizontal: 20 }}
                  data={listaEditoras}
                  renderItem={({item})=>(
                    <View style={styles.flatList}>
                      <Text> ID: {item.id}</Text>
                      <Text> Nome: {item.editora}</Text>
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

export default TelaEditora;
