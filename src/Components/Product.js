import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { Image } from "react-native-elements";
import { styles } from "../Stylez/Styling";

const Product = ({ productData, itemId }) =>
{
    /**
     * add function for btnOnPress to add to favolist via useState
     */
    return (
        <View style={ styles.container }>
            {
                productData ?
                    <View>
                        <Image
                            style={ { width: 100, height: 100 } }
                            source={ productData.image }
                            PlaceholderContent={<ActivityIndicator/>}
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                        <Text>{ productData.description }</Text>
                        <Button title="clickme to add to favo" />
                    </View>
                    : null
            }

        </View>
    );
};

export default Product;
