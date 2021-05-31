import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { View, Pressable, Text } from 'react-native'

const FavoItem = (props) => {
    const {productData} = props
    const navigation = useNavigation()
    console.log('prodat:' , productData)
    console.log("nav " , navigation)
    return (
        <View>
            {
                productData ?
                <Text onPress={() => navigation.navigate("Details", {productData})}>{productData.title}</Text> : <Text> nothing to show</Text>
            }
        </View>
    )
}

export default FavoItem
