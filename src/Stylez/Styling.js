import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DetailsScreen: {},
  FavoriteScreen: {},
  HomeScreen: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeScreenHeader: {
    flexDirection: 'row',
    alignContent: "center",
    justifyContent:'space-between',
    marginTop: 40,
  },
  HomeScreenHeaderLogoutButton:
  {
    marginRight:20,
    alignSelf: "flex-end"
  },
  HomeScreenHeaderText:
  {
    alignSelf: "flex-start"
  },
  LoadingScreen: {},
  LoginScreen: {},
  RegisterScreen: {},
  EmptyList: {},
});