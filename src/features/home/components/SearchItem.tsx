import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Text, {Caption} from '@shared/components/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchItemType} from '../types';

const SearchItem = ({
  item,
  onPress,
}: {
  item: SearchItemType;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  const uri = item.artworkUrl100.replace('100x100', '200x200');
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image style={styles.image} source={{uri}} />
      <View style={styles.info}>
        <View style={styles.description}>
          <Text style={styles.movieName}>{item.trackName}</Text>
          <Caption>{new Date(item.releaseDate).getFullYear()}</Caption>
        </View>

        <Ionicons name="chevron-forward-outline" size={20} color="#ddd" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 67,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    rowGap: 4,
  },
  movieName: {
    maxWidth: 240,
  },
});

export default SearchItem;
