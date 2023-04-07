import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';

type CancelButtonType = {
  handlePress: () => void;
};

const CancelButton = ({handlePress}: CancelButtonType) => {
  return (
    <Animated.View style={styles.wrapper} entering={FadeInRight.delay(250)}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 16,
  },
});

export default CancelButton;
