import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  type GestureResponderEvent,
} from 'react-native';
import Text from '@shared/components/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@shared/theme/styled-components';

type HeaderProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

const Header = ({onPress, title}: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name="arrow-back-outline"
            size={28}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 16,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default Header;
