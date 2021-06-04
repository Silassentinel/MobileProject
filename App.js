import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import { firebaseConfig } from "./config/FireBaseConfig";
import { store } from "./src/Store/index";
import LoadingScreen from "./src/Views/LoadingScreen";
import LoginScreen from "./src/Views/LoginScreen";
import RegisterScreen from "./src/Views/RegisterScreen";
import TabNavigator from "./src/Navigation/TabNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App()
{
  // if there is no length the app isn't init'd so init
  if (!firebase.apps.length) 
  {
    firebase.initializeApp(firebaseConfig);
  }
  // bijhoude of ingelogged is
  const [isLoggendIn, setIsLoggendIn] = useState(false);
  // store opslaan in de persistor
  const persistor = persistStore(store);
  // stack maken waarin de stackscreens komen
  const Stack = createStackNavigator();
  // bijhouden op de app aan het laden is om al dan niet loading screen te tonen
  const [isLoading, setIsLoading] = useState(true);
  // useEffect met lege array om slechts 1maal uit te voeren
  useEffect(() =>
  {
    // observer om na te gaan of de user ingeloged is
    const unsubscribe = firebase.auth().onAuthStateChanged((user) =>
    {
      // true = user is ingelogd
      if (user)
      {
        setIsLoggendIn(true); // ingeloggd
      }
      else
      {
        setIsLoggendIn(false); // niet ingelogged
      }
      setIsLoading(false); // niet meer aan het laden
    });
    return () => unsubscribe();
  });
  return (
    //provider om de store aan alle child components beschikbaar te maken
    <Provider store={ store }>
      {/*Om te voorkomen dat de componentns buiten het scherm gaan*/ }
      <SafeAreaProvider>
        {/*het opslaan van de store op local storage*/ }
        <PersistGate loading={ null } persistor={ persistor }>
          {/*Navigatie mogelijk maken door een container te voorzien*/ }
          <NavigationContainer>
            {/*Stack navigator gaat de screens stacken
          wat het mogelijk maakt om zowel met de back butten (native) als een functie terug te gaan
          maar ook functioneel vooruit te gaan in de stack*/}
            <Stack.Navigator>
              {
                isLoading ?
                  (<Stack.Screen name="loading" component={ LoadingScreen } />) // laadscherm tonen om  de UX te verhogen
                  : (

                    isLoggendIn ? (<Stack.Screen name="home" options={ { headerShown: false } } component={ TabNavigator } />) // nagaan om de gebruiker ingelogged is
                    /*Niet ingeloged dan wordt er een nieuwe stack gemaakt met login en register scherm zonder link naar de tab nav om verder gebruik van de app af te blocken*/
                      : (<>
                        <Stack.Screen name="Login" component={ LoginScreen } /> 
                        <Stack.Screen name="Register" component={ RegisterScreen } />
                      </>)) }
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}
