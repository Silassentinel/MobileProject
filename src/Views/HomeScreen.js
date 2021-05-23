import React from 'react'
import { View, Text, Button } from 'react-native'
import { logOut } from "../API/Auths";
import { styles } from "../Stylez/Styling"
import firebase from "firebase";

const HomeScreen = () =>
{
    const currUser = firebase.auth().currentUser;
    return (
        <View style={ styles.container }>
            <Text>HomeScreen</Text>
                <Text>{currUser.uid? currUser.uid : "not logged in you cheated to get here"}</Text>
                <Text>{currUser.email? currUser.email : "not logged in you cheated to get here"}</Text>
            <Button title="logout" onPress={() => logOut()}/>
        </View>
    );
};

export default HomeScreen;
