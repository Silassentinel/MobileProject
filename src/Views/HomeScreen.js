import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from "../Stylez/Styling";
import firebase from "firebase";
import ProductList from "../Components/ProductList";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";

const HomeScreen = () =>
{
    const dispatch = useDispatch(getAllProducts);
    const { products } = useSelector(state => state.getAllProducts);
    const currUser = firebase.auth().currentUser;
    useEffect(() =>
    {
        dispatch(getAllProducts());
    }, []);
    return (
        <View style={ styles.container }>
            <HomeScreenHeader />
            <ProductList data={ products } />
            <Text>{ currUser.uid ? currUser.uid : "not logged in you cheated to get here" }</Text>
            <Text>{ currUser.email ? currUser.email : "not logged in you cheated to get here" }</Text>
        </View>
    );
};

export default HomeScreen;
