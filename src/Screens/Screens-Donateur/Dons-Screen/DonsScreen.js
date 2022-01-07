import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { FAB } from 'react-native-paper';
import { theme } from '../../../themes';

const DonsScreen = () => {
    return (
    <View style={styles.container}>
           
        <View>
            <Text style={styles.Title}>Liste des dons</Text>
            <TextInput
                placeholder='Chercher'
                style={styles.Recherche}/>
        </View>
        <ScrollView contentContainerStyle={{paddingTop:15}}>
               
        </ScrollView>
        <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
    </View>
    )
}

export default DonsScreen

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      container: {
        backgroundColor: theme.colors.bg.primary,
        width:'100%',
        height:'100%'
    },  
    Title: {
        color: theme.colors.brand.primary,
        marginTop: 45,
        marginBottom: 35,
        fontSize: 30,
        fontWeight: `${theme.fontWeights.bold}`,
        textAlign: 'center'
    },
    Recherche: {
        margin: 10,
        backgroundColor: theme.colors.bg.secondary,
        color: theme.colors.ui.quaternary,
        padding: 8,
        borderRadius: 30,
        marginRight: 20,
        marginLeft: 20,
    }
})
