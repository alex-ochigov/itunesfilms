import React from 'react';
import styled from 'styled-components/native';
import {Text as RNText, StyleSheet, type TextProps} from 'react-native';

const FONT_NAME = 'Lato';

const defaultStyles = StyleSheet.create({
  font: {
    fontFamily: FONT_NAME,
    fontWeight: '700',
  },
});

const Text = (props: TextProps) => (
  <RNText {...props} style={[defaultStyles.font, props?.style]} />
);

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
