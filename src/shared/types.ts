export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Home: undefined;
};

export type TabIconProps = {
  color: string;
  size: number;
};

export type Theme = {
  fontFamily: string;
  fontSize: number;
  grey: string;
  lighGrey: string;
  darkGrey: string;
  background: string;
  primary: string;
};

export type MovieType = {
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
