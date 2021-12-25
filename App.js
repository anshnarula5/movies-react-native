import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import store from "./store";

export default function App() {
  const [data, setData] = useState([{ name: "sadas", key: "sad" }]);
  const [text, setText] = useState("");
  const handleSubmit = (text) => {
    setData([...data, { name: text, key: Math.random() }]);
    setText("");
  };
  const handleDelete = (id) => {
    setData((prev) => prev.filter((d) => d.key !== id));
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar />
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5 ,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor : "black"
  }
 
});
