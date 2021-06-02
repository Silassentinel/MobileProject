import React from 'react';
import { View, Text, Button, ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import { Image } from "react-native-elements";
import { styles } from "../Stylez/Styling";
import { add } from "../Store/Slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const Product = ({ productData, itemId }) =>
{
    // if (productData)
    // {
    //     Alert.alert(productData);
    // }
    // if(itemId)
    // {
    //     Alert.alert(itemId)
    // }
    const navigation = useNavigation();
    const favoProducts = useSelector(state => state.manageFavos);
    const dispatch = useDispatch();
    const handleDisable = () => 
    {
        return favoProducts.find(element => element.id === productData.id)!== null? false:true;
    }
    /**
     * add function for btnOnPress to add to favolist via useState
     */
    const handleClick = () =>  
    {
        if (favoProducts.find(element => element.id === productData.id))
        {
            Alert.alert("this product is already in your favolist");
            return;
        }
        else
        {
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
        }
    };
    return (
        <TouchableHighlight style={ styles.container } onPress={() => navigation.navigate("List",{
            screen: 'Details',
            params:{productData}})}>
            {
                productData ?
                    <>
                        <Image
                            style={ { width: 100, height: 100, top: 0, left: 0 } }
                            source={ { uri: productData.image ? productData.image : "https://www.kindpng.com/picc/m/178-1788467_nope-png-nope-nope-png-transparent-png.png" } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                        <Button title="clickme to add to favo"
                            onPress={ () => handleClick() }
                            /*checken of het product in de favo lijst staat zo ja button niet meer bruikbaar maken*/
                            disabled={ 
                                favoProducts.find(element => element.id === productData.id)!== undefined? true:false
                            }
                        />
                    </>
                    : null
            }

        </TouchableHighlight>
    );
};

export default Product;
