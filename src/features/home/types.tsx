export type HomeStackParamList = {
  Featured: undefined;
  Search: undefined;
  Movie: {item: SearchItemType};
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

export type SearchItemType = {
  trackId: number;
  trackName: string;
  kind: string;
  previewUrl: string;
  artworkUrl100: string;
  releaseDate: string;
  currency: string;
  primaryGenreName: string;
  longDescription: string;
  trackPrice: number;
  trackViewUrl: string;
};
