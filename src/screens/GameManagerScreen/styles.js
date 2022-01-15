import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  basicContainer: {
    flex:1, 
    marginLeft: 10, 
    marginRight: 10
  },
  flatListContainer: {
    flex:1,
  },
  itemListContainer: {
    height: 50, 
    flexDirection:'row', 
    marginBottom:10, 
    justifyContent: 'space-between',
    borderColor: 'azure', 
    //borderWidth:1
  },
  itemText: {
    fontSize: 25, 
    width: '60%', 
    textAlignVertical:'center',
    color: 'azure',
    marginLeft: 5
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default style;