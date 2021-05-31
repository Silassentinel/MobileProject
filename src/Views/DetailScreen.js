import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { Button } from "react-native-elements";
import { styles } from "../Stylez/Styling";

const DetailScreen = ({ route, navigation }) =>
{
    const { productData } = route.params;
    console.log("detail prod ", productData);
    console.log("navi ", navigation);
    return (
        <View style={ styles.container }>
            {
                productData ?
                    <View>
                        <Image
                            style={ { width: 100, height: 100 } }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                        <Text>{ productData.description }</Text>
                        <Button title="remove from favo" />
                    </View>
                    : null
            }
        </View>
    );
};

export default DetailScreen;
