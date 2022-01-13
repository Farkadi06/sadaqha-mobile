import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DonsScreen from '../Screens/Screens-Donateur/Dons-Screen/DonsScreen';

const RouteDonateur = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DonScreen" component={DonsScreen} />
        </Stack.Navigator>
    )
}

export default RouteDonateur; 

const styles = StyleSheet.create({})
