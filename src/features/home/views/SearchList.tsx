import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SearchItemLoading from '../components/SearcItemLoading';
import SearchNotFound from '../components/SearchNotFound';
import SearchItem from '../components/SearchItem';
import Placeholder from '@shared/views/Placeholder';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shared/theme/styled-components';
import type {HomeStackParamList, SearchItemType} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ITheme} from '@shared/theme/theme';

type SearchListProps = {
  data?: SearchItemType[];
  isLoading: boolean;
};

const SearchList = ({data, isLoading}: SearchListProps) => {
  const navigation =
    useNavigation<NativeStackScreenProps<HomeStackParamList>>();

  const theme = useTheme();
  const styles = getStyles(theme);

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

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
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
      backgroundColor: colors.grey,
      borderRadius: 100,
    },
  });

export default SearchList;
