import React, { useRef } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../../themes';
import AnnonceMap from '../../../components/AnnonceMap/Annonce-Map';

const MapScreen = () => {
  const refRBSheet = useRef();
    return (
        <View style={styles.container}>
            <AnnonceMap/>
        </View>
    )
}

export default MapScreen


const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%'
},

})