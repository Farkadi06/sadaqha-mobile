import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import theme from '../themes'

const Header = () => {
    // menu
    return (
        <View style={styles.header}>
            <Ionicons
                name='menu'
                size='16'
                color= '#fffff' />

            <View >
                <Text style ={styles.headerText}>Annonce Screen</Text>
            </View>

            <Ionicons
                name='filter'
                size='16'
                color= '#fffff' />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#333',
        letterSpacing:1

    }

})
