import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ListHeaderProps = {
  title: string;
  handlePress: () => void;
};

const ListHeader = ({title, handlePress}: ListHeaderProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={28} color="#d1d1d1" />
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
