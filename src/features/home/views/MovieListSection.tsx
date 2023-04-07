import React from 'react';
import {
  ScrollView,
  FlatList,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import MovieListItem from '../components/MovieListItem';
import Skeleton from '@shared/components/Skeleton';
import {MovieListItemPlaceholder} from '@shared/components/Placeholders';
import {fetchTopMovies} from '@shared/api/handlers/top-movies';
import type {FeaturedDataType, FeaturedListItemProps} from '../types';

type MovieListSectionProp = {
  containerStyles: StyleProp<ViewStyle>;
};

const MovieListSection = ({containerStyles}: MovieListSectionProp) => {
  const {data, isLoading} = useQuery<FeaturedDataType>(
    ['movies'],
    fetchTopMovies,
  );

  if (isLoading || !data?.data) {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={containerStyles}>
        <Skeleton>
          <MovieListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <MovieListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <MovieListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <MovieListItemPlaceholder />
        </Skeleton>
      </ScrollView>
    );
  }

  const renderItems = ({item}: FeaturedListItemProps) => {
    const [, , {label: imageUrl}] = item['im:image'];
    return <MovieListItem uri={imageUrl} />;
  };

  return (
    <FlatList
      data={data.data.feed.entry}
      renderItem={renderItems}
      keyExtractor={item => item.id.attributes['im:id']}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={containerStyles}
    />
  );
};

export default MovieListSection;
