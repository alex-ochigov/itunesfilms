import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '@shared/components/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@shared/theme/styled-components';

type ListHeaderProps = {
  title: string;
  handlePress: () => void;
};

const ListHeader = ({title, handlePress}: ListHeaderProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={28} color={colors.grey} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default ListHeader;
