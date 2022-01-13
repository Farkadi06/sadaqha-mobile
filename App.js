import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/Screens/Screens-Beneficiaire/Map-Screen/MapScreen';
import Home from './src/Screens/Screens-Beneficiaire/Annonces-Screen/Home'
import { NavigationContainer } from "@react-navigation/native";
import { useState } from 'react';
import RouteBenifeciaire from './src/Navigation/Route-Benifeciaire';
import RouteDonateur from './src/Navigation/Route-Donateur';
import SwitchScreen from './src/Screens/SwitchScreen';
import NavigationRoute from './src/Navigation/NavigationRoute';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/shared/Header';
import { theme } from './src/themes';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isDonateur, setIsDonateur] = useState(true);

  const Tab = createStackNavigator();
  return (

// {/* {isAuthenticated ? <RouteBenifeciaire /> : <AccountsNavigation />} */}
// {!isDonateur ? <RouteBenifeciaire /> : <RouteDonateur/>}
    <NavigationContainer style={styles.container}>
        <Tab.Navigator  >
          <Tab.Screen name="SwitchScreen" component={SwitchScreen} />
          <Tab.Screen name="Donateur"component={RouteDonateur} options={{ headerTitle: ({ route }) => <Header mycolor={theme.colors.bg } title= 'Donateur' />}} />
          <Tab.Screen name="Benifiaire"component={RouteBenifeciaire}  options={{ headerTitle: ({ route }) => <Header mycolor={theme.colors.bg} title= 'Benifiaire' />}} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
