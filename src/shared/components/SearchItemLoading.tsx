import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Skeleton from '@shared/components/Skeleton';
import {SearchImagePlaceholder} from '@shared/components/Placeholders';
import {useTheme} from '@shared/theme/styled-components';
import type {ITheme} from '@shared/theme/theme';

const SearchItemLoading = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Skeleton>
          <SearchImagePlaceholder />
        </Skeleton>
      </View>
      <View style={styles.content}>
        <Skeleton>
          <SearchImagePlaceholder />
        </Skeleton>
      </View>
    </ScrollView>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      marginTop: 8,
      paddingLeft: 16,
    },
    content: {
      height: 100,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.grey,
    },
  });

export default SearchItemLoading;
