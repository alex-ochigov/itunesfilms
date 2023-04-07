import styled from 'styled-components/native';
import {View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const MovieListItemPlaceholder = styled(View)`
  width: ${width / 2 - 32}px;
  height: ${height / 3}px;
  border-radius: 8px;
  background-color: #ddd;
`;

export const TvListItemPlaceholder = styled(View)`
  width: ${width - 32}px;
  height: ${width - 32}px;
  background-color: #ddd;
  border-radius: 8px;
`;

export const AvatarPlaceholder = styled(View)`
  width: 48px;
  height: 48px;
  background-color: #ddd;
  border-radius: 100px;
`;

export const SearchImagePlaceholder = styled(View)`
  width: 67px;
  height: 80px;
  background-color: #ddd;
  border-radius: 6px;
`;
