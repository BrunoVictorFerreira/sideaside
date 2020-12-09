import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Test = props => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ width: 150,height: 50, backgroundColor: "red" }}></View>
                <View style={{ width: 150,height: 50, backgroundColor: "blue" }}></View>
                <View style={{ width: 150,height: 50, backgroundColor: "yellow" }}></View>
                <View style={{ width: 150,height: 50, backgroundColor: "black" }}></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: "purple",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        height: "100%"
    },
    containerIn: {
        flex: 1
    }
})

export default Test