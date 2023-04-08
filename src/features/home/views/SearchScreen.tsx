import React, {useState} from 'react';
import {SafeAreaView, Keyboard, StyleSheet} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import SearchBar from '@shared/components/SearchBar';
import CancelButton from '../components/CancelButton';
import SearchList from './SearchList';
import {useTheme} from '@shared/theme/styled-components';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {fetchMovies} from '@shared/api/handlers/search';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParamList, SearchItemType} from '../types';
import type {ITheme} from '@shared/theme/theme';

type SearchScreenType = NativeStackScreenProps<HomeStackParamList, 'Search'>;

type SearchResponseDataType = {
  data?: {
    resultCount: number;
    results: SearchItemType[];
  };
};

const SearchScreen = ({navigation}: SearchScreenType) => {
  const [showCancel, setShowCancel] = useState(false);
  const [searchText, setSearchText] = useState('');

  const queryClient = useQueryClient();
  const theme = useTheme();
  const styles = getStyles(theme);

  const {data, refetch, isFetching} = useQuery<SearchResponseDataType>(
    ['search'],
    () => fetchMovies(searchText),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    },
  );

  const handleBack = () => {
    setSearchText('');
    setShowCancel(false);
    queryClient.resetQueries(['search']);
    setTimeout(() => {
      navigation.goBack();
    }, 250);
  };

  const handleClear = () => {
    setSearchText('');
    queryClient.resetQueries(['search']);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        sharedTransitionTag="searchBar"
        style={styles.searchWrapper}>
        <SearchBar
          value={searchText}
          handleChange={text => setSearchText(text)}
          handleShowCancel={() => setShowCancel(true)}
          handleSubmit={refetch}
          handleClear={handleClear}
          editable={true}
          autoFocus={true}
          layout={Layout.damping(10)}
        />

        {showCancel && <CancelButton handlePress={handleBack} />}
      </Animated.View>

      <SearchList data={data?.data?.results} isLoading={isFetching} />
    </SafeAreaView>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
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
      paddingTop: 8,
    },
  });

export default SearchScreen;
