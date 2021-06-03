import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Views/HomeScreen";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () =>
{
    return (
        <Tab.Navigator        >
            <Tab.Screen options=
                {
                    {
                        tabBarIcon: ({ color, size }) => <AntDesign size={ size } color={ color } name="home" />
                    }
                }
                name="Home"
                component={ HomeScreen } />
            <Tab.Screen options=
                {
                    {
                        tabBarIcon: ({ color, size }) => <FontAwesome size={ size } color={ color } name="list" />
                    }
                }
                name="List"
                component={ StackNavigator } />
        </Tab.Navigator>
    );
};

export default TabNavigator;