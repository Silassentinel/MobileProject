import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { logOut } from "../API/Auths";
import { styles } from "../Stylez/Styling";
import firebase from "firebase";
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreenHeader = () =>
{
    const currUser = firebase.auth().currentUser;
    return (
        <View style={ styles.HomeScreenHeader }>
            <Text style={ styles.HomeScreenHeaderText }>Welcome { currUser.email } to the fakestore app</Text>
            {
                /**
                 * Align to either side
                 */
                <Button
                    style={ styles.HomeScreenHeaderLogoutButton }
                    title=""
                    onPress={ () => logOut() }
                    type="clear"
                icon={
                    <Icon
                    name="logout"
                    size={17}
                    color="#fff"
                    />
                }
                />
            }
        </View>
    );
};

export default HomeScreenHeader;
