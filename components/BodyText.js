import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function BodyText(props) {
    return (
        <View>
            <Text style = {{...styles.text, ...props.style}}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans'
    }
})