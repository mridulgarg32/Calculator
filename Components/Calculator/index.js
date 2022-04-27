import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import styles from './styles';
import Strings from '../../Constants/Strings';
const Calculator = props => {
  return (
    <View style={styles.container}>
      <View style={styles.laneView}>
        <Button
          title={Strings.CANCEL}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.SEVEN}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.FOUR}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.ONE}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.DOT}
          onClick={val => {
            props.click(val);
          }}
        />
      </View>
      <View style={styles.laneView}>
        <Button
          title={Strings.PLUS_MINUS}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.EIGHT}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.FIVE}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.TWO}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.ZERO}
          onClick={val => {
            props.click(val);
          }}
        />
      </View>
      <View style={styles.laneView}>
        <Button
          title={Strings.PERCENTAGE}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.NINE}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.SIX}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.THREE}
          onClick={val => {
            props.click(val);
          }}
        />
        <Button
          title={Strings.DOUBLE_ZERO}
          onClick={val => {
            props.click(val);
          }}
        />
      </View>
      <View style={styles.laneView}>
        <View
          style={styles.secondaryView}>
          <Button
            title={Strings.DIVIDE}
            onClick={val => {
              props.click(val);
            }}
          />
          <Button
            title={Strings.MULTIPLY}
            onClick={val => {
              props.click(val);
            }}
          />
          <Button
            title={Strings.MINUS}
            onClick={val => {
              props.click(val);
            }}
          />
          <Button
            title={Strings.PLUS}
            onClick={val => {
              props.click(val);
            }}
          />
          <Button
            style={{backgroundColor: 'yellow'}}
            title={Strings.EQUAL}
            onClick={val => {
              props.click(val);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Calculator;
