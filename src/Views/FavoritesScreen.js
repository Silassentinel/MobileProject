import React from 'react'
import { View, Text } from 'react-native'
import { styles } from "../Stylez/Styling";
import { useSelector } from "react-redux";
import FavoList from "../Components/FavoList";

const FavoritesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate("Details")}>blabla favo</Text>
            <FavoList/>
        </View>
    )
}

export default FavoritesScreen
