import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '@shared/components/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@shared/theme/styled-components';
import type {ITheme} from '@shared/theme/theme';

const SearchNotFound = () => {
  const theme = useTheme();

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={64} color={theme.colors.primary} />
      <Text style={styles.text}>Nothing Found</Text>
    </View>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 16,
    },
    text: {
      fontSize: 32,
      color: colors.primary,
    },
  });

export default SearchNotFound;
