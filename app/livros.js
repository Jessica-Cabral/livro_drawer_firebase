import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Button,
} from "react-native";
import Mytext from "../componentes/Mytext";
import Mytextinput from "../componentes/Mytextinput";
import Mybutton from "../componentes/Mybutton";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const TelaLivro = ({ navigation }) => {
  const [livro, setLivro] = useState("");
  const [id_livro, setId_livro] = useState("");

  async function inserirGenero() {
    try {
      const docRef = await addDoc(collection(db, "Livro"), {
        livro: livro,
      });
      Alert.alert("Informação", "Livro cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Atenção", "Erro ao cadastrar livro!");
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
                  placeholder="Nome do livro"
                  style={{ flex: 1, marginRight: 10, width:250, padding: 10 }}
                  value={genero}
                  onChangeText={setGenero}
                />
                <View style={{ width: 40 }}>
                  <Button title="+" onPress={inserirLivro} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TelaLivro;
