import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { remove } from "../Store/Slices/productsSlice";
import { useDispatch } from "react-redux";
import { styles } from "../Stylez/Styling";
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoItem = (props) =>
{
    const { productData } = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <>
            {
                productData ?
                    <View style={ styles.container }>
                        <Image
                            style={ styles.ProductImage }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text style={styles.productTitle}>{ productData.title }</Text>
                        <Text style={styles.productTitle}>€{ productData.price }</Text>
                    </View> : <Text> nothing to show</Text>
            }
            <Button
                icon=
                {
                    <Icon name="trash"
                        size={ 22 }
                        color="red" />
                }
                title={ "delete" }
                onPress={ () => dispatch(remove(productData)) }
                buttonStyle={styles.FavoItemBtn}
            />
        </>
    );
};

export default FavoItem;
