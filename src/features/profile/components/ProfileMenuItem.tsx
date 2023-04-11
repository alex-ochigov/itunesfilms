import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Text from '@shared/components/Typography';
import {useTheme} from '@shared/theme/styled-components';

type ProfileMenuItemProps = {
  onPress: (event: GestureResponderEvent) => void;
  leadingIconName: string;
  name: string;
};

const ProfileMenuItem = ({
  onPress,
  leadingIconName,
  name,
}: ProfileMenuItemProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Ionicons
          name={leadingIconName}
          size={24}
          color={theme.colors.primary}
        />
        <Text>{name}</Text>
      </View>
      <Ionicons
        name="chevron-forward-outline"
        size={28}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
});

export default ProfileMenuItem;
