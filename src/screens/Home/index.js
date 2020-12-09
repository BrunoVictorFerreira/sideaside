import React, { useState } from 'react'
import { View, Modal, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Card from '../../components/card'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable';



const Home = (props) => {

    return (


        <View style={styles.Container}>

            <ImageBackground source={require('../../../assets/Fundo.png')} style={{ width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto", position: "absolute", zIndex: -1 }} />
            <View style={styles.ContainerNotDrop}>
                <Header {...props} />
                <Animatable.Text animation="fadeInLeft" style={styles.BemVindo}>
                    Olá, {props.usuario}
                </Animatable.Text>
                <Animatable.Text animation="fadeInRight" style={styles.textUsuario}>
                    Seja bem vindo(a) a <Text style={styles.side}>
                        Side A Side
                    </Text>
                </Animatable.Text>

                {/* <TouchableOpacity style={{ zIndex: 1 }} onPress={sair}>
                        <Text style={{ color: "red", fontWeight: "bold", fontSize: 50 }}>Sair</Text>
                    </TouchableOpacity> */}

            </View>

            <View style={styles.ContainerDrop}>
                <Text style={styles.textPedidos}>
                    Nossos Planos
                </Text>
                <Text style={styles.textPedidosSub}>
                    Clique sobre o plano que deseja conhecer
                </Text>
                <View style={styles.containerCards}>
                    <Card {...props} title="Landing Page" plan="land" value="500" />
                    <Card {...props} title="Básico" plan="basi" value="1000" />
                    <Card {...props} title="Completo" plan="comp" value="1600" />
                    <Card {...props} title="Personalizado" plan="perso" value="0" />
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "purple"
    },
    ContainerNotDrop: {
        flex: 1,

    },
    ContainerDrop: {
        flex: 2,
        backgroundColor: "white",
        borderTopLeftRadius: 100,

    },
    BemVindo: {
        color: "white",
        fontFamily: "roboto-Thin",
        fontSize: 50,
        letterSpacing: 0.5,
        marginLeft: 10,
    },
    textUsuario: {
        color: "white",
        fontFamily: "roboto",
        fontSize: 30,
        letterSpacing: 0.5,
        marginLeft: 10
    },
    textPedidos: {
        fontFamily: "roboto-Bold",
        color: "purple",
        fontSize: 35,
        letterSpacing: 0.5,
        textAlign: "center",
        marginTop: 10,
    },
    textPedidosSub: {
        fontFamily: "roboto-Light",
        color: "purple",
        fontSize: 20,
        letterSpacing: 0.5,
        textAlign: "center"
    },
    side: {
        fontFamily: "roboto-Black",
        color: "white",
        fontSize: 30,
        marginLeft: 10
    },
    containerCards: {
        padding: 20,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
        alignContent: "space-around"
    }
})

const mapStateToProps = ({ user }) => {
    return {
        usuario: user.usuario
    }

}


export default connect(mapStateToProps, null)(Home)