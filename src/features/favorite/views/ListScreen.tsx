import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import SearchBar from '@shared/components/SearchBar';
import {Heading} from '@shared/components/Typography';

const ListScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView>
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

const styles = StyleSheet.create({
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
