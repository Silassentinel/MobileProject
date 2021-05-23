
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../Views/FavoritesScreen";
import DetailScreen from "../Views/DetailScreen";

const Stack = createStackNavigator();

const StackNavigator = () =>
{
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="List" component={ FavoritesScreen } />
                <Stack.Screen name="Details" component={ DetailScreen } />
            </Stack.Navigator>
        </>
    );
};

export default StackNavigator;