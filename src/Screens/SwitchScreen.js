import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationRoute from '../Navigation/NavigationRoute';
import { theme } from '../themes'

const SwitchScreen = () => {
    const navigation = useNavigation();
    return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitlte}>Vous êtes les bienvenus</Text>
                </View>
                <View style= {styles.buttonsContainer} >
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Donateur')} >
                                <Text style={styles.buttonText}>Donateur</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Benifiaire')} >
                            <Text style={styles.buttonText}>Bénificiare</Text>
                    </TouchableOpacity>
                </View>  
            </View>
    )
}

export default SwitchScreen

const styles = StyleSheet.create({
    headerTitlte:{
        color: '#fff',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 28,
        fontWeight: `${theme.fontWeights.bold}`,
        textAlign: 'center'
        
    },
    header:{
        height:Dimensions.get('screen').height * 0.35,
        backgroundColor: theme.colors.brand.primary,
    },
    buttonsContainer:{
        display:'flex',
        alignItems:'center',
        marginTop:50
    },
    button: {
        backgroundColor: theme.colors.brand.primary,
        width: "60%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
})
