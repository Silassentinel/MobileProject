import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from "../Stylez/Styling";

const LoadingScreen = () =>
{
    //scherm om op te tonen dat de app aan het laden is voor tragere devices
    // dit geeft een betere UX
    return (
        <View style={styles.LoadingScreen}>
        <View style={ styles.container }>
            <Text>Getting your app ready</Text>
            <ActivityIndicator
                size="large"
                color="#00ff00"
            />
            </View>
        </View>
    );
};

export default LoadingScreen;
