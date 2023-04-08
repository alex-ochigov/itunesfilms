import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '@shared/components/Typography';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {ITheme} from '@shared/theme/theme';
import {useTheme} from '@shared/theme/styled-components';

type CancelButtonType = {
  handlePress: () => void;
};

const CancelButton = ({handlePress}: CancelButtonType) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Animated.View style={styles.wrapper} entering={FadeInRight.delay(250)}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    wrapper: {
      marginLeft: 16,
    },
    text: {
      color: colors.link,
      fontSize: 16,
    },
  });

export default CancelButton;
