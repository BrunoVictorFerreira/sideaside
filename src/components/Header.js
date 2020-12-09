import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

const Header = (props) => {
    return (
            <View style={styles.ImageContainer}>
                <TouchableOpacity style={{width: 60, height: 60}} onPress={() => { props.navigation.navigate('Profile') }}>
                    <Image source={require('../../assets/perfil.png')} style={{width: "100%", height: "100%" }} />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    ImageContainer: {
        marginTop: 25,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 10,
        marginRight: 15
    }
})

export default Header
