import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (min - max)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default function gameScreen() {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
}

const styles = StyleSheet.create({});
