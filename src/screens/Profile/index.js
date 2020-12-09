import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert, AsyncStorage, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import Card from '../../components/card'
import Header from '../../components/Header'
import Icon from '@expo/vector-icons/FontAwesome5'



const Home = (props) => {
    const sair = async () => {
        try {
            await AsyncStorage.removeItem('@SIDEASIDE')
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (e) {
            Alert.alert("Erro", "Erro Logout");
        }
    }
    return (


        <View style={styles.Container}>
            <ImageBackground source={require('../../../assets/Fundo.png')} style={{ width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto", position: "absolute", zIndex: 0 }} />
            <View style={styles.ContainerNotDrop}>




            </View>

            <View style={styles.ContainerDrop}>
                <TouchableOpacity style={{ zIndex: 1, padding: 10, borderRadius: 100, position: "absolute", right: 20, backgroundColor: "purple", marginTop: 20 }} onPress={sair}>

                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>Sair <Icon name="sign-out-alt" size={25} /></Text>
                </TouchableOpacity>
                <Image source={require('../../../assets/perfil.png')} style={{ maxWidth: "100%", maxHeight: "100%", marginTop: 10 }} />
                <Text style={styles.text}>{props.usuario}</Text>

                <Text style={styles.conf}>
                    <Icon name="cog" size={30} /> Configurações
                </Text>
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
        alignItems: "center",
        justifyContent: "center"
    },
    ContainerDrop: {
        flex: 4,
        backgroundColor: "white",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: "center"
    },
    BemVindo: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginTop: 20,
        marginLeft: 10,
    },
    textUsuario: {
        color: "white",
        fontSize: 30,
        letterSpacing: 0.5,
        marginLeft: 10
    },
    textPedidos: {
        color: "purple",
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 0.5,
        textAlign: "center"
    },
    containerCards: {
        padding: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    text: {
        fontFamily: "roboto-Bold",
        textAlign: "center",
        fontSize: 40,
        color: "purple"
    },
    conf: {
        color: "purple",
        fontSize: 30,
        fontFamily: "roboto-Bold",
        textAlign: "center",
        marginTop: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        usuario: user.usuario
    }

}


export default connect(mapStateToProps, null)(Home)