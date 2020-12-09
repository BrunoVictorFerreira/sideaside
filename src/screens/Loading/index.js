import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Alert, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../store/actions/user'

const Loading = (props) => {
    const fetchStorage = async () => {
        let logged = false;
        try {
            logged = await AsyncStorage.getItem("@SIDEASIDE")

            if (!logged) {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            } else {

                let state = {
                    usuario: logged
                }
                props.onLogin({ ...state })

                props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
        } catch (e) {
            Alert.alert('Erro', 'ERRROOOOOOO LOADING')

        }
    }
    useEffect(() => {
        fetchStorage()
    });
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Loading)