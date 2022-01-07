import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import AnnonceInfo from '../../../components/Annonce/Annonce-info'
import styles from './style'

const home = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Title}>Liste des annonces</Text>
                <TextInput
                    placeholder='Chercher'
                    style={styles.Recherche}/>
            </View>
                <ScrollView contentContainerStyle={{paddingTop:15}}>
                    <AnnonceInfo uri='https://content.avito.ma/mob_320/10/10049038656.jpg' AnnonceName='Voiture à donner' AnnonceVille='Casablanca' AnnonceCategorie='Véhicules'/>
                    <AnnonceInfo uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQHgQlYy3jKuXLOm7HL9184wtvXxrgYoTZEXNp4-iW6Fl2zrUD08sC4jXnUqee6mwsc&usqp=CAU' AnnonceName='Vetements à donner' AnnonceVille='Agadir' AnnonceCategorie='Vetements'/>
                    <AnnonceInfo uri='https://mercileonie.b-cdn.net/16368-large_default/machinalaver-micro-souris-maileg.jpg' AnnonceName='Une machine à lavé neuf' AnnonceVille='Marakech' AnnonceCategorie='Electroniques'/>
                    <AnnonceInfo uri='https://m.media-amazon.com/images/I/515JeXhuY+L._AC_UX385_.jpg' AnnonceName='Un T-shirt' AnnonceVille='Tanger' AnnonceCategorie='Vetements'/>
                    <AnnonceInfo uri='http://sizestores.s3.amazonaws.com/wp-content/uploads/2012/12/DSC_0813.jpg' AnnonceName='Des chaussures à donner' AnnonceVille='Casablanca' AnnonceCategorie='Chaussures'/>
                    <AnnonceInfo uri='https://cdn.dbtstatic.com/y/im/i/21/13/3/16172021662057.jpg' AnnonceName='PC portable' AnnonceVille='Casablanca' AnnonceCategorie='Electroniques'/>
                    <AnnonceInfo uri='https://canary.contestimg.wish.com/api/webimage/5e96682bb0c6c40193aa268e-large.jpg?cache_buster=1f7658b107eeaa4c7b417a602d502b03' AnnonceName='Un T-shirt' AnnonceVille='Tanger' AnnonceCategorie='Vetements'/>
                    <AnnonceInfo uri='https://content.avito.ma/mob_320/10/10049038656.jpg' AnnonceName='Voiture à donner' AnnonceVille='Casablanca' AnnonceCategorie='Véhicules'/>
                    <AnnonceInfo uri='https://canary.contestimg.wish.com/api/webimage/5e96682bb0c6c40193aa268e-large.jpg?cache_buster=1f7658b107eeaa4c7b417a602d502b03' AnnonceName='Un T-shirt' AnnonceVille='Tanger' AnnonceCategorie='Vetements'/>
                    <AnnonceInfo uri='https://content.avito.ma/mob_320/10/10049038656.jpg' AnnonceName='Voiture à donner' AnnonceVille='Casablanca' AnnonceCategorie='Véhicules'/>
                </ScrollView>
        </View>
    )
}

export default home

