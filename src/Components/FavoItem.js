import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { remove } from "../Store/Slices/productsSlice";
import { useDispatch } from "react-redux";
import { styles } from "../Stylez/Styling";

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
                            style={ { width: 100, height: 100 , top:0,left:0} }
                            source={ { uri: productData.image } }
                            PlaceholderContent={ <ActivityIndicator /> }
                        />
                        <Text>{ productData.title }</Text>
                        <Text>€{ productData.price }</Text>
                    </View> : <Text> nothing to show</Text>
            }
            <Button
                title={ "delete" }
                onPress={ () => dispatch(remove(productData)) } 
                style={styles.FavoListBtn}
                />
        </>
    );
};

export default FavoItem;
