import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { styles } from "../Stylez/Styling";
import Product from "./Product";

const ProductList = ({ data }) =>
{
    const renderItem = ({ item }) => (<Product productData={ item } itemId={ item.id } />);
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
            data={ data }
            contentContainerStyle={ { alignItems: "center", alignContent: "center" } }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
            ListEmptyComponent={ ActivityIndicator } />
    );
};

export default ProductList;
