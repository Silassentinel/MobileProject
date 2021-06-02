import React, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Views/HomeScreen";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";

const Tab = createBottomTabNavigator();

const TabNavigator = () =>
{
    return (
        <Tab.Navigator>
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