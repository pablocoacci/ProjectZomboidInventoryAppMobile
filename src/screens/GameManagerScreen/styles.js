import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  basicContainer: {
    flex:1, 
    marginLeft: 10, 
    marginRight: 10
  },
  titleText: {
    fontSize: 15, 
    marginTop: 5, 
    marginBottom: 10, 
    color: "#000", 
    fontWeight: "bold"
  },
  basicInputText: {
    borderWidth:1, 
    padding: 3, 
    marginBottom: 10
  },
  basicButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", 
    padding: 10, 
    marginBottom: 10
  },
  flatListContainer: {
    flex:1, 
    borderWidth:1
  },
  itemListContainer: {
    height: 50, 
    flexDirection:'row', 
    backgroundColor:'lavender', 
    marginBottom:10, 
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 25, 
    width: '60%', 
    textAlignVertical:'center'
  },
  buttonItemList: {
    backgroundColor:'lightcoral', 
    width: '15%', 
    justifyContent:'center', 
    alignItems:'center'
  }
});

export default style;