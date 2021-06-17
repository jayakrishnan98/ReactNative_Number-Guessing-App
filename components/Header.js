import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>Guess The Number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headertitle: {
    color: "white",
    fontSize: 18,
  },
});
