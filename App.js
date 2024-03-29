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
import NewDons from './src/Screens/Screens-Donateur/crud-Dons/NewDons'
import SignInScreen from './src/Screens/Screens-Auth/SignInScreen/SignIn'
import SignUpScreen from './src/Screens/Screens-Auth/SignupScreen/SignUp'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isDonateur, setIsDonateur] = useState(true);

  const Tab = createStackNavigator();
  return (

// {/* {isAuthenticated ? <RouteBenifeciaire /> : <AccountsNavigation />} */}
// {!isDonateur ? <RouteBenifeciaire /> : <RouteDonateur/>}

    <NavigationContainer style={styles.container}>
      {
        !isAuthenticated ? 
        <Tab.Navigator  >
          <Tab.Screen name="SwitchScreen" component={SwitchScreen} />
          <Tab.Screen name="Donateur"component={RouteDonateur} options={{ headerTitle: ({ route }) => <Header mycolor={theme.colors.bg } title= 'Donateur' />}} />
          <Tab.Screen name="Benifiaire"component={RouteBenifeciaire}  options={{ headerTitle: ({ route }) => <Header mycolor={theme.colors.bg} title= 'Benifiaire' />}} />
          <Tab.Screen name="NewDons" component={NewDons} options={{ headerTitle: ({ route }) => <Header mycolor={theme.colors.bg} title= 'Benifiaire' />}} />
        </Tab.Navigator> : 
          <Tab.Navigator  >
            <Tab.Screen name="SignIn" component={SignInScreen}/>
            <Tab.Screen name="SignUp" component={SignUpScreen}/>
          </Tab.Navigator>
      }

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
