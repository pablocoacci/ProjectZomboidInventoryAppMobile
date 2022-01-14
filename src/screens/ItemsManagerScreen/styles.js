import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    basicContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    flatListContainer: {
        flex:1, 
        borderWidth:1, 
        width: '90%', 
        marginBottom: 8
    },
    basicButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD", 
        padding: 10, 
        marginBottom: 10, 
        width: '90%'
    },
    modalTitleText: {
        marginBottom: 10, 
        fontSize: 17
    },
    modalInputText: {
        borderWidth: 1, 
        width: windowWidth * 0.7, 
        height: 40, 
        marginBottom: 8
    },
    modalButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD", 
        padding: 10, 
        marginBottom: 10, 
        width: windowWidth * 0.7
    },
    itemContainer: {
        height: 40, 
        flexDirection:'row', 
        backgroundColor:'lavender', 
        marginBottom:5, 
        justifyContent: 'space-between'
    },
    principalItemText: {
        width: '50%', 
        fontSize: 15, 
        textAlignVertical:'center', 
        paddingLeft: 5
    },
    secundaryItemText: {
        textAlignVertical:'center'
    },
    buttonItem: {
        backgroundColor:'lightcoral', 
        width: 70, 
        justifyContent:'center', 
        alignItems:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      dropdown2BtnStyle: {
        width: windowWidth * 0.7,
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
      }
});

export default style;