import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import Text from '@shared/components/Typography';
import {ITheme} from '@shared/theme/theme';
import {useTheme} from '@shared/theme/styled-components';

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

  const theme = useTheme();
  const styles = getStyles(theme);

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

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      height: 45,
      width: 240,
      borderRadius: 100,
      backgroundColor: colors.primary,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      color: colors.background,
    },
  });

export default PrimaryButton;
