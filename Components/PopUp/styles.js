import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: Colors.MODAL_BACKGROUND,
    borderRadius: 20,
    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
export default styles;
