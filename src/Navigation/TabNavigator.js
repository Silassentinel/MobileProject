import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Views/HomeScreen";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () =>
{
    return (
        // bottomTab Nav
        // met actief en inactieve kleuren 
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#808',
            inactiveTintColor: 'black',
          }}>
            <Tab.Screen options=
                {
                    {
                        tabBarIcon: ({ color, size }) => <AntDesign size={ size } color={ color } name="home" /> // huisje tonen voor home
                    }
                }
                name="Home"
                component={ HomeScreen } />
            <Tab.Screen options=
                {
                    {
                        tabBarIcon: ({ color, size }) => <FontAwesome size={ size } color={ color } name="list" /> // lijstje tonen voor lijst
                    }
                }
                name="List"
                component={ StackNavigator } /> 
        </Tab.Navigator>
        /*Lijst is een stack Nav daarin wordt het eerste gescherm op de favolijst gezet en details als 2de*/
    );
};

export default TabNavigator;