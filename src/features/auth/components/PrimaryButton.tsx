import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import Text from '@shared/components/Typography';

type PrimaryButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

const PrimaryButton = ({onPress, text}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 240,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
  text: {
    color: '#fff',
  },
});

export default PrimaryButton;
