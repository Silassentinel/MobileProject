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
    const [email, setEmail] = useState(null);
    const [pw, setPw] = useState(null);
    const [confimPw, setConfirmPw] = useState(null);
    useEffect(() => 
    {
        if(pw !==null || confimPw!==null)
        {
            if (pw === confimPw) 
            {
                Alert.alert("correct!");
            }
        }
    }, []);
    return (
        <KeyboardAvoidingView style={ styles.container }>
            <Input label="email"
                value={ email }
                autoCapitalize='none'
                onChangeText={ (text) => setEmail(text) } />
            <Input label="pw"
                secureTextEntry={ true }
                value={ pw }
                onChangeText={ (text) => setPw(text) } />
            <Input label="ConfirmPw"
                secureTextEntry={ true }
                value={ confimPw }
                onChangeText={ (text) => setConfirmPw(text) } />
            <Button
                title="Register"
                onPress={ () => registerUser(email, pw) } />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
