import React from 'react';
import { Button } from "react-native-elements/";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../Views/FavoritesScreen";
import DetailScreen from "../Views/DetailScreen";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../Stylez/Styling";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () =>
{
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ FavoritesScreen }
          options={ {
            headerLeft: (props) => (
              <HeaderBackButton
                { ...props }
                onPress={ () =>
                {
                  navigation.goBack();
                } }
              />
            ),
          } } />
        <Stack.Screen name="Details" component={ DetailScreen }
          options={ {
            headerRight: () => (
              <Button
                onPress={ () => navigation.goBack() }
                title="back"
                buttonStyle={ styles.DetailsScreenHeaderBackButton }
                icon={ <AntDesign name="leftcircle" size={ 24 } color="grey" /> }
              />
            ),
          } }
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;