import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SearchItemLoading from '../components/SearcItemLoading';
import SearchNotFound from '../components/SearchNotFound';
import SearchItem from '../components/SearchItem';
import Placeholder from '@shared/views/Placeholder';
import {useNavigation} from '@react-navigation/native';
import type {HomeStackParamList, SearchItemType} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type SearchListProps = {
  data?: SearchItemType[];
  isLoading: boolean;
};

const SearchList = ({data, isLoading}: SearchListProps) => {
  const navigation =
    useNavigation<NativeStackScreenProps<HomeStackParamList>>();

  if (!data) {
    return <Placeholder />;
  }

  if (isLoading) {
    return <SearchItemLoading />;
  }

  if (!data.length) {
    return <SearchNotFound />;
  }

  const renderSeparator = () => <View style={styles.listSeparator} />;
  const renderItems = ({item}: {item: SearchItemType}) => {
    return (
      <SearchItem
        item={item}
        onPress={() => {
          navigation.navigate('Movie', {item});
          // eslint-disable-next-line
        }}
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={({trackId}: SearchItemType) => trackId.toString()}
      renderItem={renderItems}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={styles.contentWrapper}
      style={styles.listWrapper}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 24,
  },
  searchWrapper: {
    marginTop: 24,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listWrapper: {
    marginTop: 8,
  },
  contentWrapper: {
    paddingLeft: 16,
    paddingBottom: 80,
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ddd',
    borderRadius: 100,
  },
});

export default SearchList;
