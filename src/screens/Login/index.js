import React from 'react'
import { Text, View, StyleSheet, Dimensions, Alert, AsyncStorage, Keyboard } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { login } from '../../store/actions/user'



const Login = (props) => {
    state = {
        usuario: null,
        senha: null
    }
    const entrar = () => {
        if (state.usuario == "Bruno" && state.senha == "123") {
            let login = props.onLogin({ ...state })
            gravarTotal()

        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos')
        }

    }
    const gravarTotal = async () => {
        try {

            await AsyncStorage.setItem("@SIDEASIDE", state.usuario)

            Keyboard.dismiss()


            Alert.alert('Sucesso', 'Dado salvo com sucesso')

            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } catch (e) {
            Alert.alert('Erro', 'ERRROOOOOOO LOGIn')

        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.containerForm}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput style={styles.input} onChangeText={text => state.usuario = text}></TextInput>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} onChangeText={text => state.senha = text}></TextInput>
                <TouchableOpacity style={styles.button} onPress={entrar}>
                    <Text style={{ color: "purple", fontSize: 20, fontWeight: "bold" }}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        paddingTop: Dimensions.get('window').height / 3,
        flex: 1,
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        marginBottom: 20
    },
    containerForm: {
        flex: 1,
        width: "90%"

    },
    label: {
        color: "white",
        fontSize: 30,
        textAlign: "center"
    },
    input: {
        color: "purple",
        fontSize: 25,
        padding: 5,
        backgroundColor: "white",
        marginBottom: 10

    },
    button: {
        marginTop: 10,
        backgroundColor: "white",
        padding: 20,
        alignItems: "center",

    }
})

const mapStateToProps = ({ user }) => {
    return {
        usuario: user.usuario,
        senha: user.senha,
        isLogged: user.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)

