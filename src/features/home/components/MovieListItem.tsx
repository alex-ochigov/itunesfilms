import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

type TvListItemProps = {
  uri: string;
};

const MovieListItem = ({uri}: TvListItemProps) => {
  const highResUrl = uri.replace('113x170bb.png', '400x600bb.png');

  return (
    <View>
      <Image source={{uri: highResUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  image: {
    width: width / 2 - 32,
    height: height / 3,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  placeholder: {
    position: 'absolute',
  },
});

export default MovieListItem;
