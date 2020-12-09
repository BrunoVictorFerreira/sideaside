import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'

const Option = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon name={
                    props.type == "Exclusivo" ?
                    "star" : props.type == "Visibilidade" ?
                    "chart-line" : props.type == "Suporte" ?
                    "phone" : "check"
                } color="white" size={20}/>
            </View>
            <Text style={{color: "purple", fontFamily: "roboto", fontSize: 16, marginTop: 3}}>{props.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    containerIcon: {
        height: 50,
        width: 50,
        backgroundColor: "purple",
        borderRadius: 100,
        alignItems:"center",
        justifyContent: "center"
    },
    icon: {
        

    }
})

export default Option