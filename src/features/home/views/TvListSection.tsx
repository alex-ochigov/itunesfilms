import React from 'react';
import {
  ScrollView,
  FlatList,
  Dimensions,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import TvListItem from '../components/TvListItem';
import {TvListItemPlaceholder} from '@shared/components/Placeholders';
import Skeleton from '@shared/components/Skeleton';
import {fetchTopTvSeasons} from '@shared/api/handlers/top-tvseasons';
import type {
  FeaturedDataType,
  FeaturedItemType,
  FeaturedListItemProps,
} from '../types';

type TvListSectionProp = {
  containerStyles: StyleProp<ViewStyle>;
};

const {width} = Dimensions.get('window');

const TvListSection = ({containerStyles}: TvListSectionProp) => {
  const {data, isLoading} = useQuery<FeaturedDataType>(
    ['tvseasons'],
    fetchTopTvSeasons,
  );

  if (isLoading || !data?.data) {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={containerStyles}>
        <Skeleton>
          <TvListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <TvListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <TvListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <TvListItemPlaceholder />
        </Skeleton>
        <Skeleton>
          <TvListItemPlaceholder />
        </Skeleton>
      </ScrollView>
    );
  }

  const renderItems = ({item}: FeaturedListItemProps) => {
    const [, , {label: imageUrl}] = item['im:image'];

    return <TvListItem uri={imageUrl} />;
  };

  return (
    <FlatList
      data={data?.data.feed.entry}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate={0}
      disableIntervalMomentum={true}
      renderItem={renderItems}
      keyExtractor={item => item.id.attributes['im:id']}
      snapToOffsets={data?.data.feed.entry.map(
        (_: FeaturedItemType, idx: number) => {
          if (idx === 0) {
            return 1;
          }
          if (idx === 9) {
            return idx * width - 32;
          }

          return idx * (width - 24);
        },
      )}
      contentContainerStyle={containerStyles}
    />
  );
};

export default TvListSection;
