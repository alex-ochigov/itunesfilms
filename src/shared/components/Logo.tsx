import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Heading} from './Typography';

type LogoProps = {
  sharedTransitionTag?: string;
};

const Logo = ({sharedTransitionTag}: LogoProps) => {
  return (
    <Animated.View sharedTransitionTag={sharedTransitionTag}>
      <Heading style={styles.logo}>Movie App</Heading>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 36,
  },
});

export default Logo;
