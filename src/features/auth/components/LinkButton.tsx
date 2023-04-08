import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import Text from '@shared/components/Typography';

type LinkButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  linkText: string;
  disabled?: boolean;
};

const LinkButton = ({
  onPress,
  text,
  linkText,
  disabled = false,
}: LinkButtonProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 6,
    justifyContent: 'center',
  },
  link: {
    color: '#2196f3',
  },
});

export default LinkButton;
