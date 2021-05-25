import React from 'react';
import { View, Text, Button } from 'react-native';
import { logOut } from "../API/Auths";
import { styles } from "../Stylez/Styling";
import firebase from "firebase";
import ProductList from "../Components/ProductList";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";

const HomeScreen = () =>
{
    const dispatch = useDispatch(getAllProducts);
    const {products} = useSelector(state => state.getAllProducts);
    const currUser = firebase.auth().currentUser;
    return (
        <View style={ styles.container }>
            <HomeScreenHeader onLoad={() => dispatch(getAllProducts())} />
            <ProductList data={products} />
            <Text>HomeScreen</Text>
            <Text>{ currUser.uid ? currUser.uid : "not logged in you cheated to get here" }</Text>
            <Text>{ currUser.email ? currUser.email : "not logged in you cheated to get here" }</Text>
            <Button title="logout" onPress={ () => logOut() } />
        </View>
    );
};

export default HomeScreen;
