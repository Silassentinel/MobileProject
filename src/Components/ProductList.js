import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import Product from "./Product";
const itemlist = [
    { id: 1, title: "titel", price: 5, description: "zieverinpzakskes", category: "eerst", image: "linknaarwebsite" },
    { id: 2, title: "titazfdezadl", price: 4, description: "zieverinzefzfpakskes", category: "eerst", image: "linknaergegarwebsite" },
    { id: 3, title: "titael", price: 3, description: "zieverinzefzgrvbpakskes", category: "eerst", image: "linknaarweergegbsite" },
    { id: 4, title: "titezezfl", price: 2, description: "zieverinpazefkskes", category: "eerst", image: "linknaegrearwebsite" },
    { id: 5, title: "526+5", price: 1, description: "vervzefzevrthrzefg", category: "eerst", image: "linknaaregegwebsite" },
    { id: 6, title: "526+5", price: 1, description: "vervzefzevrthrzefg", category: "eerst", image: "linknaaregegwebsite" },
    { id: 7, title: "526+5", price: 1, description: "vervzefzevrthrzefg", category: "eerst", image: "linknaaregegwebsite" },
    { id: 8, title: "526+5", price: 1, description: "vervzefzevrthrzefg", category: "eerst", image: "linknaaregegwebsite" }];

const ProductList = () =>
{
    const renderItem = ({item}) => (<Product productData={item}/>);
    console.log("product list array: ",itemlist)
    return (
            <FlatList data={itemlist}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}/>
    );
};

export default ProductList;
