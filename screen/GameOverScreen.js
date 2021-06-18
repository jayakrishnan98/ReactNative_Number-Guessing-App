import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

export default function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <TitleText>Game over!!!</TitleText>
            <Image source={require('../assets/success.png')} />
            <BodyText>Number of Round: {props.roundsNumber}</BodyText>
            <BodyText>Number was :{props.userNumber}</BodyText>
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