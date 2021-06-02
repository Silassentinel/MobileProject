import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";

const EmptyList = () =>
{
    const { products } = useSelector(state => state.getAllProducts);
    if (products.lengt === 0)
    {
        dispatch(getAllProducts());
    }
    const dispatch = useDispatch();
    return (
        <View>
            <Text>List is empty</Text>
            <Button onPress={ () => dispatch(getAllProducts()) } />
        </View>
    );
};

export default EmptyList;
