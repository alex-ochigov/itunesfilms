import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import SearchBar from '@shared/components/SearchBar';
import {Heading} from '@shared/components/Typography';
import {useTheme} from '@shared/theme/styled-components';
import type {ITheme} from '@shared/theme/theme';
import {MovieType} from '@shared/types';
import SearchList from '@shared/views/SearchList';
import useFirebaseUser from '@shared/hooks/useFirebaseUser';

const ListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const styles = getStyles(theme);
  const user = useFirebaseUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    setLoading(true);
    const subscriber = firestore()
      .collection('Favorites')
      .where('userId', '==', user.uid)
      .onSnapshot((querySnapshot: FirebaseFirestoreTypes.DocumentData) => {
        const movies = querySnapshot.docs.map(
          (
            documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot<MovieType>,
          ) => {
            return {
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            };
          },
        );

        setFavorites(movies);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, [user]);

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

      <SearchList data={favorites} isLoading={loading} />
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
