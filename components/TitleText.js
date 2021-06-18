import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TitleText(props) {
  return (
    <View>
      <Text style= {{...styles.title,...props.style}}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
