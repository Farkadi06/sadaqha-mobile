import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

const AnnonceInfo = ({uri, AnnonceName, AnnonceVille, AnnonceCategorie}) => {
    return (
        <View  style={{ overflow: 'hidden', paddingBottom: 5 }}>
            <View style={styles.container}>
                <Image
                    style={styles.picture}
                    source={{
                    uri: `${uri}`,
                    }}
                />
                <View style={styles.LauriatsInfo}>
                    <Text style={styles.LaureatName}>{AnnonceName}</Text>
                    <Text style={styles.JobTitle}>{AnnonceCategorie}</Text>
                </View>
                <Text style={styles.PrevField}>{AnnonceVille}</Text>
            </View>
        </View>
    )
}

export default AnnonceInfo
