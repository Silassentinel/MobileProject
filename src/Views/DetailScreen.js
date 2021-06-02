import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { Button } from "react-native-elements";
import { styles } from "../Stylez/Styling";
import { useDispatch } from "react-redux";
import { add } from "./../Store/Slices/productsSlice";

const DetailScreen = ({ route, navigation }) =>
{
    const dispatch = useDispatch();
    const { productData } = route.params;
    const handleClick = () => {
        dispatch(add(productData));
        navigation.goBack();
    }
    return (
        <View style={ styles.DetailsScreen }>
            {
                productData ?
                    <View style={ { marginTop: 10 } }>
                        <Image
                            style={ { width: 100, height: 100 } }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                        <Text>{ productData.description }</Text>
                        <Button title="Add To Favo" onPress={ () => handleClick() } />
                    </View>
                    : null
            }
        </View>
    );
};

export default DetailScreen;
