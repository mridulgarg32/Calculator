import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import styles from './styles';
import useInputHandler from '../../Hooks/useInputHandler';

import PopUp from '../../Components/PopUp';
import Calculator from '../../Components/Calculator';
export default function MainScreen() {
  const {currentNumber, lastNumber, handleInput, showHello} = useInputHandler();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.calculatorView}>
        <Calculator
          click={val => {
            handleInput(val);
          }}
        />
      </View>
      <PopUp modalVisible={showHello} />
    </SafeAreaView>
  );
}
