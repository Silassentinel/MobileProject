import React,{ useState } from 'react';
import { KeyboardAvoidingView , View} from 'react-native';
import { styles } from "../Stylez/Styling";
import { Button, Input } from "react-native-elements";
import { logUserIn } from "../API/Auths";

const LoginScreen = ({ navigation }) =>
{
    //bijhouden van email
    const [email, setEmail] = useState("");
    //bijhouden van pw
    const [pw, setPw] = useState("");
    return (
        /*Het gebruik van een Keyboard avoiding view zorgt er voor 
        dat het keyboard nooit bovenop de input velden komt*/
        <KeyboardAvoidingView style={ styles.LoginScreen }>
            <View style={styles.LoginScreenInputWrapper}>
            <Input
                style={ styles.LoginScreenInput }
                autoFocus={ true }
                label="email"
                autoCapitalize='none'
                value={ email }
                onChangeText={ (text) => setEmail(text) }
            />
            <Input
                style={ styles.LoginScreenInput }
                autoFocus={ true }
                label="pw"
                secureTextEntry={ true }
                value={ pw }
                onChangeText={ (text) => setPw(text) }
            />
            </View>
            <Button
                title="Login"
                onPress={ () => logUserIn(email, pw) } />
            <Button
                type="clear"
                title="No Account?"
                onPress={ () => navigation.navigate("Register") } />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
