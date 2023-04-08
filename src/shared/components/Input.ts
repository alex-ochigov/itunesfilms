import styled from '../theme/styled-components';
import {TextInput as RNTextInput} from 'react-native';

const TextInput = styled(RNTextInput)`
  font-family: ${({theme}) => theme.fonts.defaultFamily};
  font-size: ${({theme}) => theme.fonts.defaultSize}px;
  color: ${({theme}) => theme.colors.primary};
`;

export default TextInput;
