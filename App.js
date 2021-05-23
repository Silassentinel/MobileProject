import React, { useState } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import { firebaseConfig } from "./config/FireBaseConfig";

import { Text, View } from 'react-native';

import { styles } from "./src/Stylez/Styling";
import HomeScreen from "./src/Views/HomeScreen";

export default function App()
{
  if (!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }
  
    /**
     * const persistor = persistStore(store);
    */
  return (
    /*

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
    </PersistGate>
    <Provider>
    */
   <HomeScreen/>
  );
}
