import React from "react";
import { Text, View, ScrollView } from "react-native";
import style from "./style";

import { firebaseConfig } from "../../../firebase-config";
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';

export function Home({ route }) {

  const { id: userId } = route.params;

  const db = getFirestore(firebaseConfig);
  const userCollection = collection(db, "user");

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const getUsers = async () => {
      const userRef = query(userCollection, where("id", "==", userId));
      const querySnapshot = await getDocs(userRef);

      setUser(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    getUsers();
  }, []);

  return (
    <ScrollView
      style={style.container}
      scrollEnabled={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={style.subContainer}>

        {user.map((user) => {
          return (
            <Text style={style.title} key={user.id}>Parabéns {user.nickName}, você conseguiu!!</Text>
          )
        })}

      </View>
    </ScrollView>
  );
}
