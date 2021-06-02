import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { logOut } from "../API/Auths";
import { styles } from "../Stylez/Styling";

const HomeScreenHeader = () =>
{
    return (
        <View style={styles.HomeScreenHeader}>
            <Text style={styles.HomeScreenHeaderText}>this is will be replaced by a propper header</Text>
            {
                /**
                 * Align to either side
                 */
                <Button 
                style={styles.HomeScreenHeaderLogoutButton}
                title="logout" 
                onPress={ () => logOut() } 
                type="outline"
                //icon={}
                />
            }
        </View>
    );
};

export default HomeScreenHeader;
