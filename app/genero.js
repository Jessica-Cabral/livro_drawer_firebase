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

const TelaGenero = ({ navigation }) => {
  const [genero, setGenero] = useState("");
  const [id_genero, setId_genero] = useState("");

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
                  placeholder="Nome do editora"
                  style={{ flex: 1, marginRight: 10, width:250, padding: 10 }}
                  value={genero}
                  onChangeText={setGenero}
                />
                <View style={{ width: 40 }}>
                  <Button title="+" onPress={inserirGenero} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TelaGenero;
