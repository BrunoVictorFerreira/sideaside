import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'

const CardDetails = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerOut}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Página Exclusiva</Text>
                    <Text style={styles.desc}>Você terá uma página exclusiva para você e/ou sua empresa, personalizada a gosto.</Text>
                </View>

            </View>
            <View style={props.type == "Básico" || props.type == "Completo" ? styles.containerOut : {display : "none"}}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Blog</Text>
                    <Text style={styles.desc}>Aqui você terá a opção de criar um blog, para divulgar suas promoções ou artigos no seu tempo.</Text>

                </View>

            </View>
            <View style={props.type == "Básico" || props.type == "Completo" ? styles.containerOut : {display : "none"}}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Gerenciador de Conteúdo</Text>
                    <Text style={styles.desc}>Com o gerenciador de conteúdo, você poderá alterar seu site dinâmicamente e no seu próprio tempo.</Text>
                </View>

            </View>
            <View style={props.type == "Básico" || props.type == "Completo" ? styles.containerOut : {display : "none"}}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Mais de uma guia</Text>
                    <Text style={styles.desc}>Com o plano BÁSICO, você poderá optar por até 10 telas, enquanto no plano COMPLETO, não há limites.</Text>

                </View>

            </View>
            <View style={styles.containerOut}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Suporte de 1 mês</Text>
                    <Text style={styles.desc}>O suporte será feito lado a lado com você por 1 mês, por telefone, email ou por whatsapp.</Text>
                </View>

            </View>
            <View style={props.type == "Completo" ? styles.containerOut : {display : "none"}}>
                <View style={styles.containerIn}>
                    <View style={styles.icon}>
                        <Icon name="check" color="white" size={20} />
                    </View>
                </View>
                <View style={styles.containerInMore}>
                    <Text style={styles.text}>Suporte de 6 meses</Text>
                    <Text style={styles.desc}>O suporte será feito lado a lado com você por 6 meses, por telefone, email ou por whatsapp.</Text>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    containerOut: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    containerIn: {
        flex: 1,
    },
    containerInMore: {
        flex: 5,
    },
    icon: {
        backgroundColor: "#64006B",
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontFamily: "roboto-Bold",
        marginLeft: 10,
        color: "#64006B"
    },
    desc: {
        fontSize: 18,
        fontFamily: "roboto-Light",
        marginLeft: 10,
        color: "#64006B",
        textAlign: 'justify'
    },

})

export default CardDetails