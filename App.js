import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import { firebaseConfig } from "./config/FireBaseConfig";

import { store } from "./src/Store/index";
import HomeScreen from "./src/Views/HomeScreen";
import LoadingScreen from "./src/Views/LoadingScreen";
import LoginScreen from "./src/Views/LoginScreen";
import RegisterScreen from "./src/Views/RegisterScreen";
import TabNavigator from "./src/Navigation/TabNavigator";

export default function App()
{
  if (!firebase.apps.length) // if there is no length the app isn't init'd so init
  {
    firebase.initializeApp(firebaseConfig);
  }
  const [isLoggendIn, setIsLoggendIn] = useState(false);
  const persistor = persistStore(store);
  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>
  {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) =>
    {
      if (user)
      {
        setIsLoggendIn(true);
      }
      else
      {
        setIsLoggendIn(false);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  });
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <NavigationContainer>
          <Stack.Navigator>
            {
              isLoading ?
                (<Stack.Screen name="loading" component={ LoadingScreen } />)
                : (

                  isLoggendIn ? (<Stack.Screen name="home" component={ TabNavigator }/>)
                    :
                    (
                      <>
                        <Stack.Screen name="Login" component={ LoginScreen } />
                        <Stack.Screen name="Register" component={ RegisterScreen } />
                      </>
                    )
                )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
