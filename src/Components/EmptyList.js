import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Store/APIReq/FakeStoreGetAllProducts";
import { styles } from "../Stylez/Styling";
import Icon from 'react-native-vector-icons/FontAwesome';

const EmptyList = ({ parent }) =>
{
    //producten uit de store ophalen
    const { products } = useSelector(state => state.getAllProducts);
    // dispatch gebruiken we om acties van de store uit te voeren
    const dispatch = useDispatch();
    // indien er geen inzitten ophalen via UseDispatch
    if (products.lengt === 0)
    {
        dispatch(getAllProducts());
    }
    return (
        <View style={ styles.EmptyList }>
            <Text style={ styles.EmptyListText }>Your Favorites List is empty go back to home and add some</Text>
            <>
            
                {/*Nagaan welke de parrent is waarin deze view/screen geladen wordt
                Indien Prod gaan we een reload button tonen om het ophalen manueel te kunnen aansturen
                */
                    parent === 'Prod' ?
                        <Button
                        title="Click me to refresh the list"
                            buttonStyle={ styles.ProductBtn }
                            icon=
                            { <Icon name="bell"
                                size={ 22 }
                                color="green"
                            /> }
                            onPress={ () => dispatch(getAllProducts()) }
                        />
                        : null
                }
            </>
        </View>
    );
};

export default EmptyList;
