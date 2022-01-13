import React, { useState } from 'react'
import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../themes';
import { colors } from '../../themes/colors';

const AnnoncePopup = ({ modal, info }) => {
    const [fav, setFav] = useState(false);
    
    function Fav() {
        setFav(!fav);
    }

    return (
        <View style={styles.container}>
            <View style={styles.popUp}>
                <TouchableOpacity style={styles.closeContainer} onPress={() => modal(false)} >
                    <Text style={styles.close}>X</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: info.img,
                        }}
                    />
                </View>
                <Text style={styles.name}>{info.name}</Text>
                <Text style={styles.job}>{info.job}</Text>
                {!fav ? (
                    <TouchableOpacity style={styles.button} onPress={Fav}>
                        <Text style={styles.buttonText}>Demmander ce dons</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.buttonActive} onPress={Fav}>
                        <Text style={styles.buttonActiveText}>Supprimmer ce dons</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default AnnoncePopup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      popUp: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.3,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 5,
        borderRadius: 10,
      },
      closeContainer: {
        position: 'relative',
        width: 30,
        height: 30,
        borderRadius: 50,
        top: 10,
        left: 10,
        backgroundColor: theme.colors.ui.tertiary,
        shadowColor: 'black',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      close: {
        color: 'black',
        fontWeight: 'bold',
      },
      imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        alignSelf: 'center',
        top: -20,
      },
      img: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 25,
      },
      name: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: -15,
      },
      job: {
        color: 'grey',
        fontWeight: '100',
        textAlign: 'center',
      },
      button: {
        width: '60%',
        height: 40,
        backgroundColor: theme.colors.brand.primary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 30,
        shadowColor: 'black',
        elevation: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      buttonActive: {
        width: '60%',
        height: 40,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 30,
        shadowColor: 'black',
        elevation: 5,
      },
      buttonActiveText: {
        color: theme.colors.brand.primary,
        fontWeight: 'bold',
      },
})
