import React from 'react';
import { useState } from "react";
import { KeyboardAvoidingView } from 'react-native';
import { styles } from "../Stylez/Styling";
import { Button, Input } from "react-native-elements";
import { logUserIn } from "../API/Auths";

const LoginScreen = () =>
{
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    return (
        <KeyboardAvoidingView style={ styles.container }>
            <Input
                label="email"
                autoCapitalize='none'
                value={ email }
                onChangeText={ (text) => setEmail(text) }
            />
            <Input
                label="pw"
                secureTextEntry={ true }
                value={ pw }
                onChangeText={ (text) => setPw(text) }
            />
            <Button
                type="clear"
                title="No Account?"
                onPress={ () => navigation.navigate("Register") } />
            <Button
                title="Login"
                onPress={ () => logUserIn(email, pw) } />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
