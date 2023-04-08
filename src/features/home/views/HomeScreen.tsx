import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import SearchBar from '@shared/components/SearchBar';
import ListHeader from '../components/ListHeader';
import TvListSection from './TvListSection';
import MovieListSection from './MovieListSection';
import {useTheme} from '@shared/theme/styled-components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParamList} from '../types';
import type {ITheme} from '@shared/theme/theme';

type FeaturedScreenType = NativeStackScreenProps<
  HomeStackParamList,
  'Featured'
>;

const FeaturedScreen = ({navigation}: FeaturedScreenType) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.listBottomPadding}>
        <Header />

        <Pressable
          style={styles.searchWrapper}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <SearchBar editable={false} sharedTransitionTag="searchBar" />
        </Pressable>

        <View style={styles.section}>
          <ListHeader title="Top Movies" handlePress={() => {}} />
          <MovieListSection containerStyles={styles.listContainer} />
        </View>

        <View style={styles.section}>
          <ListHeader title="Top tvSeasons" handlePress={() => {}} />
          <TvListSection containerStyles={styles.listContainer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listBottomPadding: {
      paddingBottom: 50,
    },
    searchWrapper: {
      marginTop: 24,
      marginHorizontal: 16,
    },
    listContainer: {
      paddingHorizontal: 16,
      columnGap: 8,
      justifyContent: 'center',
    },
    section: {
      marginTop: 32,
    },
  });

export default FeaturedScreen;
