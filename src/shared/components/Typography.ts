import styled from '../theme/styled-components';
import {Text as RNText} from 'react-native';

const Text = styled(RNText)`
  font-family: ${({theme}) => theme.fonts.defaultFamily};
  font-size: ${({theme}) => theme.fonts.defaultSize}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const Heading = styled(Text)`
  font-family: Lato-Bold;
  font-size: 32px;
  font-weight: 700;
`;

export const Caption = styled(Text)`
  font-family: Lato-Light;
  font-size: 12px;
`;

export const Body = styled(Text)`
  font-family: Lato-Regular;
  font-size: 16px;
`;

export default Text;
