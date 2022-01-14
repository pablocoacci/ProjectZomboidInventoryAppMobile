import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  principalContainer: {
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
  flatListContainer: {
    flex: 1, 
    borderWidth:1, 
    marginBottom: 5
  },
  dropdown2BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
    marginBottom: 10
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: { backgroundColor: "#444" },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  itemContainer: {
    height: 40, 
    flexDirection:'row',
    backgroundColor:'lavender', 
    marginBottom:5, 
    justifyContent: 'space-between'
  },
  principalItemText: {
    width: '60%', 
    fontSize: 18, 
    textAlignVertical:'center'
  },
  secundariItemText: {
    fontSize: 18, 
    textAlignVertical:'center'
  },
  itemButon: {
    backgroundColor:'lightcoral', 
    width: 30, 
    justifyContent:'center', 
    alignItems:'center'
  }
});

export default style;