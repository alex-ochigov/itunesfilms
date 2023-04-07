import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

type TvListItemProps = {
  uri: string;
};

const TvListItem = ({uri}: TvListItemProps) => {
  const highResUrl = uri.replace('170x170bb.png', '600x600bb.png');

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
    width: width - 32,
    height: width - 32,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  placeholder: {
    position: 'absolute',
  },
});

export default TvListItem;
