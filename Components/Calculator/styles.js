import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,

    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  laneView: {flex: 0.25, alignItems: 'center'},
  secondaryView: {
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY_COLOR,
    borderRadius: 40,
  },
});
export default styles;
