import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    basicContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    flatListContainer: {
        flex:1,
        width: '90%', 
        marginBottom: 15
    },
    modalTitleText: {
        marginBottom: 10, 
        fontSize: 17,
        fontWeight: "bold"
    },
    modalInputText: {
        borderWidth: 1, 
        width: windowWidth * 0.7, 
        height: 40, 
        marginBottom: 8
    },
    modalButtons: {
      width: windowWidth * 0.7, 
    },
    itemContainer: {
        height: 40, 
        flexDirection:'row', 
        marginBottom:5, 
        justifyContent: 'space-between'
    },
    principalItemText: {
        width: '50%', 
        fontSize: 15, 
        textAlignVertical:'center', 
        paddingLeft: 5,
        color: 'azure'
    },
    secundaryItemText: {
        textAlignVertical:'center',
        color: 'azure'
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
      image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default style;