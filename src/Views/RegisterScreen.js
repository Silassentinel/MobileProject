import React from 'react';
import { useState } from "react";
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input } from "react-native-elements";
import { registerUser } from "../API/Auths";
import { useEffect } from "react";
import { Alert } from "react-native";
import { styles } from "../Stylez/Styling";

const RegisterScreen = () =>
{
    // bijhoude van email
    const [email, setEmail] = useState(null);
    // bijhoude van pw
    const [pw, setPw] = useState(null);
    // bijhoude van bevestig pw
    const [confimPw, setConfirmPw] = useState(null);
    // useEffect met lege array voert maar 1 maal uit
    useEffect(() => 
    {
        //als beide paswoordvelden ingevuld zijn
        if (pw !== null || confimPw !== null)
        {
            // en beide zijn hetzelfde
            if (pw === confimPw) 
            {
                // toon een berichtje dat het goed is
                Alert.alert("correct!");
            }
        }
    }, []);
    return (
        /*Het gebruik van een Keyboard avoiding view zorgt er voor 
dat het keyboard nooit bovenop de input velden komt*/
        <KeyboardAvoidingView style={ styles.container }>
            <Input label="email"
                /* autofocus true zorgt er voor dat er automatisch gefocust wordt*/
                autoFocus={ true }
                value={ email }
                /**Hoofdletters tellen niet bij email adressen dus zetten we uit */
                autoCapitalize='none'
                // opslaan van de text in de state dmv useState
                onChangeText={ (text) => setEmail(text) } />
            <Input label="pw"
            // sterretjes tonen om pw te verbergen
                secureTextEntry={ true }
                autoFocus={ true }
                value={ pw }
                onChangeText={ (text) => setPw(text) } />
            <Input label="ConfirmPw"
                secureTextEntry={ true }
                autoFocus={ true }
                value={ confimPw }
                onChangeText={ (text) => setConfirmPw(text) } />
            <Button
                title="Register"
                // firebase method om te registreren
                onPress={ () => registerUser(email, pw) } />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
