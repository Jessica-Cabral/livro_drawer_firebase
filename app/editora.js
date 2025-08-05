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

const TelaEditora = ({ navigation }) => {
  const [editora, setEditora] = useState("");
  const [id_editora, setId_editora] = useState("");

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
                <View style={{ width: 40 }}>
                  <Button title="+" onPress={inserirEditora} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TelaEditora;
