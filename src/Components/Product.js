import React from 'react';
import { View, Text, Button, ActivityIndicator, Alert, Pressable } from 'react-native';
import { Image } from "react-native-elements";
import { styles } from "../Stylez/Styling";
import { add, clear } from "../Store/Slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const Product = ({ productData, itemId }) =>
{
    const navigation = useNavigation();
    const favoProducts = useSelector(state => state.manageFavos);
    const dispatch = useDispatch();
    /**
     * add function for btnOnPress to add to favolist via useState
     */
    const handleClick = () =>  
    {
        //console.log(productData.dateAdded = new Date().toLocaleDateString("nl-Be"))
        if(favoProducts.find( element => element.id === productData.id)){
            Alert.alert("this product is already in your favolist");
            console.log("already added")
            return;
        }
        dispatch(add(productData));
        console.log("you've added the product to your favolist");
        const buttonsToShow = [{
            text: "Accept",
            onPress: () =>
            {
                console.log('accepted');
            },
            style: {}
        }, {
            text: "Cancel",
            onPress: () => console.log('declined'),
            style: {}
        }];
        Alert.alert("Attention", "You've added the product to your favolist", buttonsToShow);
        console.log("favos", favoProducts);
    };
    return (
        <View style={ styles.container }>
            {
                productData ?
                <>
                        <Image
                            style={ { width: 100, height: 100 , top:0,left:0} }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                        <Button title="clickme to add to favo"
                            onPress={ () => handleClick()}
                            disabled={favoProducts.find(element => element.id === productData.id)}
                        />
                        </>
                    : null
            }

        </View>
    );
};

export default Product;
