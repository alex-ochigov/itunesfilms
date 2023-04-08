import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '@shared/theme/styled-components';
import {ITheme} from '@shared/theme/theme';

const {width} = Dimensions.get('window');

type TvListItemProps = {
  uri: string;
};

const TvListItem = ({uri}: TvListItemProps) => {
  const highResUrl = uri.replace('170x170bb.png', '600x600bb.png');
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View>
      <Image source={{uri: highResUrl}} style={styles.image} />
    </View>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    wrapper: {
      position: 'relative',
    },
    image: {
      width: width - 32,
      height: width - 32,
      borderRadius: 8,
      backgroundColor: colors.grey,
    },
    placeholder: {
      position: 'absolute',
    },
  });

export default TvListItem;
