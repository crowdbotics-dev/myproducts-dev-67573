import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#fff",
      padding: 10,
      position: "relative",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}><ImageBackground style={styles.GhVVLGdT} source={require("./cart.png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#ffffff"
  },
  GhVVLGdT: {
    width: 336,
    height: 216
  }
});
export default Untitled7;