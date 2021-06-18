import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Game over!!!</Text>
            <Text>Number of Round: {props.roundsNumber}</Text>
            <Text>Number was :{props.userNumber}</Text>
            <Button title="New game" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})