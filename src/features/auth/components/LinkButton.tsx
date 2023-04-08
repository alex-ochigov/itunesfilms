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
};

const LinkButton = ({onPress, text, linkText}: LinkButtonProps) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onPress}>
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
  link: {},
});

export default LinkButton;
