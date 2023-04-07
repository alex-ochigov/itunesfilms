import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Skeleton from '@shared/components/Skeleton';
import {SearchImagePlaceholder} from '@shared/components/Placeholders';

const SearchItemLoading = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Skeleton>
          <SearchImagePlaceholder />
        </Skeleton>
      </View>
      <View style={styles.content}>
        <Skeleton>
          <SearchImagePlaceholder />
        </Skeleton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingLeft: 16,
  },
  content: {
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchItemLoading;
