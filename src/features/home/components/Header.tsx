import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '@shared/components/Typography';
import Avatar from './Avatar';

const Header = () => {
  return (
    <View style={styles.container}>
      <Heading>Hi, Alex 👋</Heading>
      <Avatar uri="https://source.unsplash.com/random" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
