import React, { useState } from "react";
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Constant from "expo-constants";
import theme from "../themes";
import { Badge, Surface, Title } from "react-native-paper";
import AnnoncePopup from "../components/AnnoncePopup/AnnoncePopup";
import FiltrePopup from "../components/FiltrePopup/FiltrePupup";


const Header = ({ mycolor, title }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [laureat, setLaureat] = useState(
    {
      name: "Un T-shirt",
      img: "https://m.media-amazon.com/images/I/515JeXhuY+L._AC_UX385_.jpg",
      job: "Vetements",
    }
  )
  const { colors } = useTheme();
  // menu
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        
      >
        <FiltrePopup modal={setModalVisible} info={laureat} />
      </Modal>
      <Text style={styles.headerTitle}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: 10,
        }}
      >
        <TouchableOpacity style={styles.iconsStyle}   onPress={() => {setModalVisible(!modalVisible);}} >
            <Ionicons name="filter" size={20}  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width:Dimensions.get('screen').width * 0.8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  headerTitle:{
    fontSize:22,
    marginLeft:5,
    color:'#000',
    fontWeight:"bold"
  },
  iconsStyle:{
    width: 30,
    height: 30,
    margin:5,
    borderRadius: 50,
    backgroundColor: '#F1F1F1',
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
}
});
