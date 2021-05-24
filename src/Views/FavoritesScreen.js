import React from 'react'
import { View, Text } from 'react-native'
import { styles } from "../Stylez/Styling";

const FavoritesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
        </View>
    )
}

export default FavoritesScreen
