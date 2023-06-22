import * as React from "react";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import style from "./style";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";

export function Login() {
  const auth = getAuth(firebaseConfig);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logado com sucesso!");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={style.container} scrollEnabled={false}>
      <View style={style.subContainer}>
        <Text style={style.title}>Lupus</Text>
        <Text style={style.subTitle}>Realize o login para continuar</Text>

        <View style={style.sectionInput}>
          <View style={style.inputContainer}>
            <Feather
              name="user"
              size={24}
              color={"#8D8D99"}
              style={style.icon}
            />
            <TextInput
              style={style.input}
              placeholder="Seu e-mail"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </View>

          <View style={style.inputContainer}>
            <Feather
              name="lock"
              size={24}
              color={"#8D8D99"}
              style={style.icon}
            />
            <TextInput
              style={style.input}
              placeholder="Sua senha"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
        </View>

        <View style={style.buttonContainer}>
          <Button color={"#9333ea"} title="Logar" onPress={handleSignIn} />
        </View>

        <View style={style.buttonContainer}>
          <Button color={"#9333ea"} title="Criar Conta" />
        </View>
      </View>
    </ScrollView>
  );
}
