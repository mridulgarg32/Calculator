import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.DEFAULT},
  textView: {flex: 0.5, justifyContent: 'flex-end', alignItems: 'flex-end'},
  calculatorView: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderColor: '#363636',
  },
  resultText: {
    color: Colors.TEXT,
    fontSize: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
export default styles;
