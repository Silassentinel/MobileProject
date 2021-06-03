import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color:"#808080",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Product:{},
  ProductBtn:
  {
    borderColor:"#f00",
    backgroundColor:"#808"
  },
  productTitle:{
    color:"#fff",
    borderColor:"#0f0"
  },
  ProductDescription:{
    flexWrap:"wrap",
    color:"#fff",
    borderColor:"#0f0",
  },
  ProductImage:
  {
    margin:5,
    width: 100, 
    height: 100
  },
  FavoItem:{},
  FavoItemBtn:
  {
    backgroundColor:"#808"
  },
  DetailsScreen: 
  {
    flex:1,
    alignItems:"center",
    backgroundColor: '#000',
    color:"#808080",
  },
  DetailsScreenHeader:{
    flex:6,
    backgroundColor: '#000',
    color:"#808080",
  },
  DetailsScreenHeaderBackButton:
  {
    backgroundColor:"green",
    justifyContent:"space-evenly"

  },
  FavoriteScreen: 
  {
    backgroundColor: '#000',
    color:"#808080",
    alignContent:"center",
    justifyContent:"center"
  },
  FavoListBtn:
  {
    backgroundColor:"red"
  },
  HomeScreen: {
    backgroundColor: '#000',
    color:"#808080",
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeScreenHeader: {
    backgroundColor: '#000',
    color:"#808080",
    flexDirection: 'row',
    alignContent: "center",
    justifyContent: 'space-between',
    marginTop: 20,
  },
  HomeScreenHeaderLogoutButton:
  {

    marginRight: 20,
    alignSelf: "flex-end"
  },
  HomeScreenHeaderText:
  {
    backgroundColor: '#000',
    color:"#808080",
    alignSelf: "flex-start",
    justifyContent:"center",
    margin: 10,
  },
  LoadingScreen: {
    backgroundColor: '#000',
    color:"#808080",
  },
  LoginScreen: {
    backgroundColor: '#000',
    color:"#808080",
  },
  RegisterScreen: {
    backgroundColor: '#000',
    color:"#808080",
  },
  EmptyList: 
  {
    backgroundColor: '#000',
    color:"#808080",
    alignContent:"center",
    justifyContent:"center"
  },
});