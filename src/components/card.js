import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome5'
import * as Animatable from 'react-native-animatable';



export default (props) => {
    const clicado = () => {
        props.navigation.navigate('Details', {
            title : props.title
        })
    }
    return (
        <TouchableOpacity style={styles.card} onPress={clicado}>
            <LinearGradient
                // Background Linear Gradient
                colors={props.plan != "perso" && props.plan != "comp" ? ['purple', 'rgba(255,255,255,0.8)'] : ['#9a09bc', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                }}
            />
            <Animatable.View animation="bounce" duration={1000} iterationCount={1} style={styles.float}>
                <Icon name={props.plan == "comp" ? "fire" : props.plan == "perso" ? "asterisk" : props.plan == "basi" ? "chart-line" : "network-wired"} color="purple" size={20} />
            </Animatable.View>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.apartir}>A partir de</Text>
            <Text style={styles.rs}>R$ <Text style={styles.value}>{props.value}</Text></Text>
            <View style={styles.button}>
                <Text style={styles.detalhes}>Clique para detalhar</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "purple",
        width: "45%",
        height: 200,
        borderBottomEndRadius: 50,
        alignItems: "center"
    },
    float: {
        position: "absolute",
        left: 0,
        top: -25,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 100
    },
    text: {
        fontFamily: "roboto-Light",
        color: "white",
        textAlign: "center",
        fontSize: 25,
        marginTop: 15
    },
    apartir: {
        color: "white",
        textAlign: "center",
        fontFamily: "roboto",
        marginTop: 10
    },
    rs: {
        fontFamily: "roboto-Thin",
        fontSize: 55,
        color: "white"
    },
    value: {
        fontSize: 50
    },
    detalhes: {
        color: "purple",
        fontFamily: "roboto-Bold"
    },
    button: {
        marginTop: 15,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
    }
})