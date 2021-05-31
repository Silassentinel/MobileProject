import React from 'react'
import { View, Text } from 'react-native'
import { styles } from "../Stylez/Styling";
import { useSelector } from "react-redux";
import FavoList from "../Components/FavoList";

const FavoritesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FavoList/>
        </View>
    )
}

export default FavoritesScreen
