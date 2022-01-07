import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../themes'

const AnnonceMarker = ({ img }) => {
    return (
        <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
      </View>
    )
}

export default AnnonceMarker

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      img: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 25,
      },
})
