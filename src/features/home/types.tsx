import {MovieType} from '@shared/types';

export type HomeStackParamList = {
  Featured: undefined;
  Search: undefined;
  Movie: {item: MovieType};
};

export type FeaturedDataType = {
  data: {
    feed: {
      entry: FeaturedItemType[];
    };
  };
};

export type FeaturedItemType = {
  id: {
    attributes: {
      ['im:id']: string;
    };
  };
  ['im:image']: [{label: string}, {label: string}, {label: string}];
};

export type FeaturedListItemProps = {
  item: FeaturedItemType;
};
