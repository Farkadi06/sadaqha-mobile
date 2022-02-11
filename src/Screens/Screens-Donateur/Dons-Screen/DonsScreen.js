import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { FAB } from "react-native-paper";
import DonsInfo from "../../../components/DonsInfo/Dons-info";
import { theme } from "../../../themes";

const DonsScreen = () => {
  const navigation = useNavigation();
  const [mesAnnonces, setMesAnnonces] = useState([{
            uri:"https://content.avito.ma/mob_320/10/10049038656.jpg",
            DonsName:"Voiture à donner",
            DonsVille:"Casablanca",
            DonsCategorie:"Véhicules",
        },
        {
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQHgQlYy3jKuXLOm7HL9184wtvXxrgYoTZEXNp4-iW6Fl2zrUD08sC4jXnUqee6mwsc&usqp=CAU",
        DonsName:"Vetements à donner",
        DonsVille:"Agadir",
        DonsCategorie:"Vetements",
        },
        {
        uri:"https://mercileonie.b-cdn.net/16368-large_default/machinalaver-micro-souris-maileg.jpg",
        DonsName:"Une machine à lavé neuf",
        DonsVille:"Marakech",
        DonsCategorie:"Electroniques",
        },
        {
          uri:"https://m.media-amazon.com/images/I/515JeXhuY+L._AC_UX385_.jpg",
          DonsName:"Un T-shirt",
          DonsVille:"Tanger",
          DonsCategorie:"Vetements",
        },
        {
          uri:"http://sizestores.s3.amazonaws.com/wp-content/uploads/2012/12/DSC_0813.jpg",
          DonsName:"Des chaussures à donner",
          DonsVille:"Casablanca",
          DonsCategorie:"Chaussures",
        },
        {
          uri:"https://cdn.dbtstatic.com/y/im/i/21/13/3/16172021662057.jpg",
          DonsName:"PC portable",
          DonsVille:"Casablanca",
          DonsCategorie:"Electroniques",
        }
        ]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Title}>Liste des dons</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
      {
        mesAnnonces?.map(annonce => (
          <DonsInfo
          uri={annonce.uri}
          DonsName={annonce.DonsName}
          DonsVille={annonce.DonsVille}
          DonsCategorie={annonce.DonsCategorie}
        />
        ))
      }
{/* 
      <DonsInfo
          uri="https://content.avito.ma/mob_320/10/10049038656.jpg"
          DonsName="Voiture à donner"
          DonsVille="Casablanca"
          DonsCategorie="Véhicules"
        />
        <DonsInfo
          uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQHgQlYy3jKuXLOm7HL9184wtvXxrgYoTZEXNp4-iW6Fl2zrUD08sC4jXnUqee6mwsc&usqp=CAU"
          DonsName="Vetements à donner"
          DonsVille="Agadir"
          DonsCategorie="Vetements"
        />
        <DonsInfo
          uri="https://mercileonie.b-cdn.net/16368-large_default/machinalaver-micro-souris-maileg.jpg"
          DonsName="Une machine à lavé neuf"
          DonsVille="Marakech"
          DonsCategorie="Electroniques"
        />
        <DonsInfo
          uri="https://m.media-amazon.com/images/I/515JeXhuY+L._AC_UX385_.jpg"
          DonsName="Un T-shirt"
          DonsVille="Tanger"
          DonsCategorie="Vetements"
        />
        <DonsInfo
          uri="http://sizestores.s3.amazonaws.com/wp-content/uploads/2012/12/DSC_0813.jpg"
          DonsName="Des chaussures à donner"
          DonsVille="Casablanca"
          DonsCategorie="Chaussures"
        />
        <DonsInfo
          uri="https://cdn.dbtstatic.com/y/im/i/21/13/3/16172021662057.jpg"
          DonsName="PC portable"
          DonsVille="Casablanca"
          DonsCategorie="Electroniques"
        /> */}
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("NewDons")}
      />
    </View>
  );
};

export default DonsScreen;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: theme.colors.bg.primary,
    width: "100%",
    height: "100%",
  },
  Title: {
    color: theme.colors.brand.primary,
    marginTop: 45,
    marginBottom: 35,
    fontSize: 30,
    fontWeight: `${theme.fontWeights.bold}`,
    textAlign: "center",
  },
  Recherche: {
    margin: 10,
    backgroundColor: theme.colors.bg.secondary,
    color: theme.colors.ui.quaternary,
    padding: 8,
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 20,
  },
});
