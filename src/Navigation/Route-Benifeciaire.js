import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from '../themes';
import home from '../Screens/Screens-Beneficiaire/Annonces-Screen/Home';
import MapScreen from '../Screens/Screens-Beneficiaire/Map-Screen/MapScreen';
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/Header';


const RouteBenifeciaire = () => {
    
    const TAB_ICON = {
        Annonces: "md-albums",
        Map: "map",
        Settings: "settings",
      };
    
      const createScreenOptions = ({ route }) => {
        const iconName = TAB_ICON[route.name];
    
        return {
        tabBarLabelStyle: {
            
        },
        tabBarItemStyle: {
            backgroundColor: theme.colors.bg.secondary
        },
        tabBarActiveBackgroundColor: theme.colors.brand.secondary,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        headerStyle: {
            height: 80, // Specify the height of your custom header
            },
          tabBarActiveTintColor: theme.colors.brand.primary,
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          ),
        };
      };
    

      const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
                screenOptions={createScreenOptions}>
            <Tab.Screen name="Annonces" component={home} options={{headerShown: true, lazy: () => <Header/> }}/>
            <Tab.Screen name="Map" component={MapScreen}  options={{headerShown: true}}/>
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

export default RouteBenifeciaire

const styles = StyleSheet.create({})
