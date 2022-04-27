import React from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './styles';
import Strings from '../../Constants/Strings';
const PopUp = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>{Strings.MESSAGE}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;
