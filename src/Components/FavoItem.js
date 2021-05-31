import React from 'react'
import { View, Pressable, Text } from 'react-native'

const FavoItem = ({productData, navigation}) => {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate("Details"),{/*producdata here*/}}/>
            <Text> {productData.title}</Text>
        </View>
    )
}

export default FavoItem
