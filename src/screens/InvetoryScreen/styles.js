import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const style = StyleSheet.create({
  principalContainer: {
    flex:1, 
    marginLeft: 10, 
    marginRight: 10
  },
  flatListContainer: {
    flex: 1, 
    marginBottom: 20
  },
  itemContainer: {
    height: 40, 
    flexDirection:'row',
    marginBottom:5, 
    justifyContent: 'space-between'
  },
  principalItemText: {
    width: '60%', 
    fontSize: 18, 
    textAlignVertical:'center',
    color: 'azure'
  },
  secundariItemText: {
    fontSize: 18, 
    textAlignVertical:'center',
    color: 'azure'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default style;