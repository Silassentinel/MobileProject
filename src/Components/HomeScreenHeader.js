import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { logOut } from "../API/Auths";
import { styles } from "../Stylez/Styling";
import firebase from "firebase";
import Icon from 'react-native-vector-icons/AntDesign';

//zelf gemaakte header omdat de HomeHeader bij elk scherm als parent bleef staan
// door zalf een te maken kiezen we zelf waar en hoe deze tevoorschijn komt
const HomeScreenHeader = () =>
{
    // ophalen van gebruiker info via firebase
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
