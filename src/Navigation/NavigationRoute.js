import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import home from '../Screens/Screens-Beneficiaire/Annonces-Screen/Home';
import MapScreen from '../Screens/Screens-Beneficiaire/Map-Screen/MapScreen';
import DonsScreen from '../Screens/Screens-Donateur/Dons-Screen/DonsScreen';
import SwitchScreen from '../Screens/SwitchScreen';

const NavigationRoute = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="Annonces" component={home} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="DonScreen" component={DonsScreen} />
        </Stack.Navigator>
    )
}

export default NavigationRoute
