import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { Button } from "react-native-elements";
import { styles } from "../Stylez/Styling";
import { useDispatch } from "react-redux";
import { add } from "./../Store/Slices/productsSlice";
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailScreen = ({ route, navigation }) =>
{
    const dispatch = useDispatch();
    const { productData } = route.params;
    const handleClick = () =>
    {
        dispatch(add(productData));
        navigation.goBack();
    };
    return (
        <View style={ styles.DetailsScreen }>
            {
                productData ?
                    <View style={ styles.container }>
                        <Image
                            style={ styles.ProductImage }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text style={ styles.productTitle }>{ productData.title }</Text>
                        <Text style={ styles.productTitle }>€{ productData.price }</Text>
                        <Text style={ styles.ProductDescription }>{ productData.description }</Text>
                        <Button
                            buttonStyle={ styles.ProductBtn }
                            title=""
                            icon=
                            { 
                                <Icon name="crosshairs"
                                size={ 22 }
                                color="green" />
                            }
                            onPress={ () => handleClick() } />
                    </View>
                    : null
            }
        </View>
    );
};

export default DetailScreen;
