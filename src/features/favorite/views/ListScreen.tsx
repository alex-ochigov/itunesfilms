import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import SearchBar from '@shared/components/SearchBar';
import {Heading} from '@shared/components/Typography';
import {useTheme} from '@shared/theme/styled-components';
import type {ITheme} from '@shared/theme/theme';

const ListScreen = () => {
  const [searchText, setSearchText] = useState('');

  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Heading>Favorite movie</Heading>
      </View>
      <View style={styles.searchWrapper}>
        <SearchBar
          value={searchText}
          handleChange={text => setSearchText(text)}
          handleSubmit={() => {}}
          handleClear={() => {}}
          editable={true}
          autoFocus={false}
        />
      </View>
    </SafeAreaView>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      marginTop: 16,
      marginHorizontal: 16,
      minHeight: 48,
      justifyContent: 'center',
    },
    searchWrapper: {
      marginTop: 24,
      marginHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default ListScreen;
