import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/Screens/Screens-Beneficiaire/Map-Screen/MapScreen';
import Home from './src/Screens/Screens-Beneficiaire/Annonces-Screen/Home'
import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';
import RouteBenifeciaire from './src/Navigation/Route-Benifeciaire';
import RouteDonateur from './src/Navigation/Route-Donateur';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isDonateur, setIsDonateur] = useState(true)
  return (
    <NavigationContainer style={styles.container}>
      {/* {isAuthenticated ? <RouteBenifeciaire /> : <AccountsNavigation />} */}
      {!isDonateur ? <RouteBenifeciaire /> : <RouteDonateur/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
