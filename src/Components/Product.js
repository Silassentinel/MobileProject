import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from "../Stylez/Styling";

const Product = ({ productData }) =>
{
    console.log("product obj data: ", productData.image);
    return (
        <View style={ styles.container }>
            {
                productData ?
                    <View>
                        <Text>{ productData.image }</Text>
                        <Text>{ productData.title }</Text>
                        <Text>{ productData.price }</Text>
                        <Text>{ productData.description }</Text>
                        <Button title="clickme to add to favo" />
                    </View>
                    : null
            }

        </View>
    );
};

export default Product;
