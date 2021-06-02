import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { styles } from "../Stylez/Styling";
import EmptyList from "./EmptyList";
import Product from "./Product";

const ProductList = ({ data }) =>
{
    const renderItem = ({ item }) => { return (<Product productData={ item } itemId={ item.id } />); };
    return (
        <View style={ styles.container }>
            <FlatList
                showsVerticalScrollIndicator={ false }
                data={ data }
                renderItem={ renderItem }
                keyExtractor={ item => item.id.toString() }
                ListEmptyComponent={ <EmptyList parent={ "Prod" } /> } />
        </View>
    );
};

export default ProductList;
