import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { logOut } from "../API/Auths";

const HomeScreenHeader = () =>
{
    return (
        <View>
            <Text>this is will be replaced by a propper header</Text>
            {
                /**
                 * Align to either side
                 */
                <Button title="logout" onPress={ () => logOut() } />
            }
        </View>
    );
};

export default HomeScreenHeader;
