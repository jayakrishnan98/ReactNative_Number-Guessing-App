import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";
import TitleText from "./TitleText";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headertitle}>Guess The Number</TitleText>
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
    color: "white"
  },
});
