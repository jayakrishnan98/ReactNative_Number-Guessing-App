import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/input";

export default function startGameScreen() {

  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText)=>{
    setEnteredValue(inputText.replace(/[^0-9]/g, ""))
  }


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnInput
          keyboardType="numeric"
          maxLength={2}
          onChangeText = {numberInputHandler}
          value ={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    textAlign: "center",
  },
});
