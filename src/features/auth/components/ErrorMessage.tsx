import React from 'react';
import {StyleSheet} from 'react-native';
import {Caption} from '@shared/components/Typography';

const ErrorMessage = ({text}: {text: string}) => {
  return <Caption style={styles.message}>{text}</Caption>;
};

const styles = StyleSheet.create({
  message: {
    color: '#ef5350',
  },
});

export default ErrorMessage;
