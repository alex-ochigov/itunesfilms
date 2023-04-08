import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import Text from '@shared/components/Typography';

type PrimaryButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const PrimaryButton = ({
  onPress,
  text,
  disabled = false,
}: PrimaryButtonProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return disabled
      ? {width: withTiming(45, {duration: 100})}
      : {width: withTiming(240, {duration: 100})};
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={disabled}>
        {!disabled && <Text style={styles.text}>{text}</Text>}
        {disabled && <ActivityIndicator size="small" />}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 240,
    borderRadius: 100,
    backgroundColor: '#212121',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PrimaryButton;
