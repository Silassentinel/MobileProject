import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";
import { styles } from "../Stylez/Styling";

const EmptyList = ({ parent }) =>
{
    const { products } = useSelector(state => state.getAllProducts);
    if (products.lengt === 0)
    {
        dispatch(getAllProducts());
    }
    const dispatch = useDispatch();
    return (
        <View style={styles.EmptyList}>
            <Text>Your Favorites List is empty go back to home and add some</Text>
            <>
            {
                parent === 'Prod' ?
                <Button onPress={ () => dispatch(getAllProducts()) } 
                />
                : null
            }
            </>
        </View>
    );
};

export default EmptyList;
