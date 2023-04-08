import * as styledComponents from 'styled-components/native';

import {ITheme} from './theme';

const {
  default: styled,
  css,
  ThemeProvider,
  useTheme,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ITheme>;

export {css, useTheme, ThemeProvider};
export default styled;
