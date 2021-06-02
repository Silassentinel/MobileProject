import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import FavoItem from "./FavoItem";
import EmptyList from "./EmptyList";
import { styles } from "../Stylez/Styling";

const FavoList = () =>
{
    const favoProducts = useSelector(state => state.manageFavos);
    const renderItem = ({ item }) => (<FavoItem productData={ item } itemId={ item.id } />);
    /**
     * get usestate
     */
    return (
        <View style={ styles.container }>
            <FlatList
                showsVerticalScrollIndicator={ false }
                data={ favoProducts }
                renderItem={ renderItem }
                keyExtractor={ item => item.id.toString() }
                ListEmptyComponent={ EmptyList } />
        </View>
    );
};

export default FavoList;
