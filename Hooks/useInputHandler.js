import React, {useState, useEffect} from 'react';
import {Vibration} from 'react-native';

const useInputHandler = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [showHello, setShowHello] = useState(false);
  useEffect(() => {
    if (currentNumber === '1+3+9') {
      setShowHello(true);
    }
  }, [currentNumber]);

  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];

    if (
      lastArr === '/' ||
      lastArr === '*' ||
      lastArr === '-' ||
      lastArr === '+' ||
      lastArr === '.'
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  function handleInput(buttonPressed) {
    if (
      buttonPressed === '+' ||
      buttonPressed === '-' ||
      buttonPressed === '*' ||
      buttonPressed === '/'
    ) {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    } else if (
      buttonPressed === 1 ||
      buttonPressed === 2 ||
      buttonPressed === 3 ||
      buttonPressed === 4 ||
      buttonPressed === 5 ||
      buttonPressed === 6 ||
      buttonPressed === 7 ||
      buttonPressed === 8 ||
      buttonPressed === 9 ||
      buttonPressed === 0 ||
      buttonPressed === '.'
    ) {
      Vibration.vibrate(35);
    }
    switch (buttonPressed) {
      case 'DEL':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'C':
        Vibration.vibrate(35);
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        Vibration.vibrate(35);
        setLastNumber(currentNumber + '=');
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  return {currentNumber, lastNumber, handleInput, showHello};
};
export default useInputHandler;
