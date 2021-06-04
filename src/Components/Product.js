import React from 'react';
import { View, Text, ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import { Image, Button } from "react-native-elements";
import { styles } from "../Stylez/Styling";
import { add } from "../Store/Slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

// object destructuring om meteen de productData uit de props te halen
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
    // werkt niet zo goed als een inline tenary helaas
    const handleDisable = () => 
    {
        return favoProducts.find(element => element.id === productData.id) !== null ? false : true;
    };
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
            console.log(`you've added ${productData.title} to your favolist`);
            //alert menu opties 
            const buttonsToShow = [{
                text: "Accept",
                onPress: () =>
                {
                    console.log('accepted');
                },
                style: {}
            },
                /*{
                    text: "Cancel",
                    onPress: () => console.log('declined'),
                    style: {} 
    
                }*/
            ];
            Alert.alert("Attention", `You've added ${productData.title} to your favolist`, buttonsToShow);
        }
    };
    return (
        //touchable om heel het product klikbaar te maken
        // bij navigate geven we meteen heel het product door 
        // we gaan naar de list navigeren wat de stacknav is
        // en van de stacknav willen we het details scherm.
        // hier is een gekende issue mee als list niet eerst geladen is kan deze niet meer getoond worden
        <TouchableHighlight style={ styles.container } onPress={ () => navigation.navigate("List", {
            screen: 'Details',
            params: { productData }
        }) }>
            {
                productData ?
                    <>
                        <Image
                            style={ styles.ProductImage }
                            source={ { uri: productData.image ? productData.image : "https://www.kindpng.com/picc/m/178-1788467_nope-png-nope-nope-png-transparent-png.png" } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text style={ styles.productTitle }>{ productData.title }</Text>
                        <Text style={ styles.productTitle }>€{ productData.price }</Text>
                        <Button
                            icon=
                            {
                                <Icon name="crosshairs"
                                    size={ 22 }
                                    color="green" />
                            }
                            title=""
                            buttonStyle={ styles.ProductBtn }
                            onPress={ () => handleClick() }
                            /*checken of het product in de favo lijst staat zo ja button niet meer bruikbaar maken*/
                            disabled={
                                favoProducts.find(element => element.id === productData.id) !== undefined ? true : false
                            }
                        />
                    </>
                    : null
            }

        </TouchableHighlight>
    );
};

export default Product;
