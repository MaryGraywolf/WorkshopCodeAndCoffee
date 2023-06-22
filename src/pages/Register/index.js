import * as React from "react";
import style from "./style";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { firebaseConfig } from "../../../firebase-config";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Register() {

  const navigation = useNavigation();

  const auth = getAuth(firebaseConfig);
  const db = getFirestore(firebaseConfig);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickName, setNickName] = React.useState("");

  const handleCreateAccount = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const userCollection = doc(db, "user", auth.currentUser.uid);

        const setRegister = async () => {
          try {
            const docRef = await setDoc(userCollection, {
              id: auth.currentUser.uid,
              nickName: nickName,
              email: email,
              password: password,
            });
            console.log("Documento criado no branco: ", docRef);
          } catch (error) {
            console.error("Erro ao criar o documento: ", error);
          } finally {
          }
        };

        setRegister();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={style.container} scrollEnabled={false}>
      <View style={style.subContainer}>
        <Text style={style.title}>Lupus</Text>
        <Text style={style.subTitle}>
          Informe os dados nos campos abaixo para cadastrar uma nova conta
        </Text>

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
              name="user"
              size={24}
              color={"#8D8D99"}
              style={style.icon}
            />
            <TextInput
              style={style.input}
              placeholder="Seu nickName"
              value={nickName}
              onChangeText={(e) => setNickName(e)}
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
          <Button
            color={"#9333ea"}
            title="Registrar"
            onPress={handleCreateAccount}
          />
        </View>

        <View style={style.buttonContainer}>
          <Button color={"#9333ea"} title="Ir para o Login" onPress={() => navigation.navigate('login')}/>
        </View>
      </View>
    </ScrollView>
  );
}
