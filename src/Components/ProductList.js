import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { styles } from "../Stylez/Styling";
import EmptyList from "./EmptyList";
import Product from "./Product";

const ProductList = ({ data }) =>
{
    //render functie weg uit de layout maakt het leesbaarder
    const renderItem = ({ item }) => { return (<Product productData={ item } itemId={ item.id } />); };
    return (
        <View style={ styles.container }>
            <FlatList
            // voor een immersive view de scrollbar weg halen dan gaan de producten in de pagina op
                showsVerticalScrollIndicator={ false }
                data={ data }
                renderItem={ renderItem }
                // elk item in een lijst moet een unieke Key/id hebben
                keyExtractor={ item => item.id.toString() }
                // ipv een activity indicator een eigen gemaakte component
                // parent prop om aan te geven aan de component wat het laad
                ListEmptyComponent={ <EmptyList parent={ "Prod" } /> } />
        </View>
    );
};

export default ProductList;
