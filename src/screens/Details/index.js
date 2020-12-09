import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient';
import Option from '../../components/Option'
import Constants from 'expo-constants';
import CardDetails from '../../components/CardDetails'

const Details = props => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.ContainerNotDrop}>
                        <Text style={styles.titulo}>
                            {props.route.params.title}</Text>
                    </View>

                    <View style={styles.ContainerDrop}>
                        <View style={styles.descricao}>



                            <Text style={styles.textFloat}>
                                Para qual tipo de empresa?
                        </Text>

                            <Text style={styles.textoDesc}>

                                {
                                    props.route.params.title == "Landing Page" ?
                                        "Este perfil é destinado para a empresa e/ou pessoa que deseja ter somente uma página estática, ao qual poderá chamar clientes a sua empresa."
                                        :
                                        props.route.params.title == "Básico" ?
                                            "Este perfil é destinado para a empresa e/ou pessoa que deseja ter um site configurável e dinâmico, podendo ser alterado a gosto e tempo de sua preferência."
                                            :
                                            props.route.params.title == "Completo" ?
                                                "Este perfil é destinado a todas as empresa e/ou pessoas que desejam ter tudo de melhor que um site pode oferecer, desde gerencimento de conteúdo até o seu próprio blog, com múltiplas telas e total domínio do mesmo."
                                                :
                                                "Este perfil é destinado a empresa e/ou pessoa que deseja fazer um orçamento personalizado, podendo incluir ou excluir funcionalidades."
                                }
                            </Text>
                        </View>
                    </View>
                    <View style={styles.ContainerDropAfter}>
                        <Option type="Exclusivo" />
                        <Option type="Visibilidade" />
                        <Option type="Suporte" />
                        <Option type="Sucesso" />


                    </View>
                    <View style={styles.ContainerCarac}>
                        <Text style={styles.titleCarac}>Caracteristicas</Text>
                        <CardDetails type={props.route.params.title}/>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "white"
    },
    ContainerNotDrop: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ContainerDrop: {
        flex: 1.2,
        backgroundColor: "purple",
        alignItems: "center",
        flexDirection: "column",
        padding: 20
    },
    ContainerDropAfter: {
        flex: 0.6,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 20
    },
    titulo: {
        color: "purple",
        fontFamily: "roboto-Light",
        marginTop: 20,
        fontSize: 40
    },
    descricao: {
        flex: 1,
        padding: 20,
        width: "100%",
        borderRadius: 50
    },
    textFloat: {
        color: "white",
        fontSize: 22,
        marginTop: -15,
        fontFamily: "roboto-Bold"
    },
    textoDesc: {
        color: "white",
        fontFamily: "roboto-Light",
        fontSize: 20,
        marginTop: 10,
        textAlign: "justify"
    },
    ContainerCarac: {
        flex: 4,
        flexDirection: "column",
        padding: 20,
    },
    titleCarac: {
        color: "purple",
        textAlign: 'center',
        fontSize: 30
    }
})

export default Details