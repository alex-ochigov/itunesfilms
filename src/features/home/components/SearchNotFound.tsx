import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '@shared/components/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchNotFound = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={64} color="#212121" />
      <Text style={styles.text}>Nothing Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
  },
  text: {
    fontSize: 32,
    color: '#212121',
  },
});

export default SearchNotFound;
