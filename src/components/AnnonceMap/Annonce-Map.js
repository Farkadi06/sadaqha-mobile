import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import AnnonceMarker from '../AnnonceMarker/AnnonceMarker';
import AnnoncePopup from '../AnnoncePopup/AnnoncePopup';

const AnnonceMap = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [laureat, setLaureat] = useState(
    {
      name: "Un T-shirt",
      img: "https://m.media-amazon.com/images/I/515JeXhuY+L._AC_UX385_.jpg",
      job: "Vetements",
    }
  )
    return (
        <View style={styles.container}>
          <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        
      >
        <AnnoncePopup modal={setModalVisible} info={laureat} />
      </Modal>
          <MapView
            style={{
              width: "100%",
              height: "100%",
          }}
            provider="google"
            initialRegion={{
              latitude: 33,
              longitude: -7,
              latitudeDelta: 5,
              longitudeDelta: 5,
            }}
          >
            <Marker
          coordinate={{
            longitude: -7,
            latitude: 33,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          onPress={() => {setModalVisible(!modalVisible);}}
        >
            <AnnonceMarker img="https://content.avito.ma/mob_320/10/10049038656.jpg"/>
        </Marker>
        <Marker
          coordinate={{
            longitude: -8,
            latitude: 33,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          onPress={() => {setModalVisible(!modalVisible);}}
        >
            <AnnonceMarker img="https://mercileonie.b-cdn.net/16368-large_default/machinalaver-micro-souris-maileg.jpg"/>
        </Marker>

        <Marker
          coordinate={{
            longitude: -7,
            latitude: 31,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          onPress={() => {setModalVisible(!modalVisible);}}
        >
            <AnnonceMarker img="http://sizestores.s3.amazonaws.com/wp-content/uploads/2012/12/DSC_0813.jpg"/>
        </Marker>
          </MapView>
    </View>
    )
}

export default AnnonceMap
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    }

})