import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ListHeader from '../components/ListHeader';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParamList} from '../types';
import TvListSection from './TvListSection';
import MovieListSection from './MovieListSection';

type FeaturedScreenType = NativeStackScreenProps<
  HomeStackParamList,
  'Featured'
>;

const FeaturedScreen = ({navigation}: FeaturedScreenType) => {
  return (
    <SafeAreaView>
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

const styles = StyleSheet.create({
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
