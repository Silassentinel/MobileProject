import * as firebase from "firebase";
import "firebase/auth";
import { Alert } from "react-native";

// (optional) Register
export const registerUser = async (email, password) =>
{
    try
    {
        await firebase.default.auth().createUserWithEmailAndPassword(email, password);
    } catch (error)
    {
        Alert.alert("Registering did not succeed: ", error.message);
        //console.log(error.message);
    }
};
// Login Email + PW
export const logUserIn = async (email, password) => 
{
    try
    {
        await firebase.default.auth().signInWithEmailAndPassword(email, password);
    } catch (error)
    {
        Alert.alert("Logging in did not succeed: ", error.message);
    }
};
// Logout
export const logOut = async () => 
{
    try
    {
        await firebase.default.auth().signOut();
    } catch (error)
    {
        Alert.alert("Logging out did not succeed: ", error.message);
    }
};
