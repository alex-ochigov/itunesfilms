import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Skeleton from '@shared/components/Skeleton';
import {AvatarPlaceholder} from '@shared/components/Placeholders';

type AvatarProps = {
  uri: string;
};

const Avatar = ({uri}: AvatarProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={{uri}}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      {isLoading && (
        <View style={styles.placeholder}>
          <Skeleton>
            <AvatarPlaceholder />
          </Skeleton>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  placeholder: {
    position: 'absolute',
    zIndex: 2,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 100,
    zIndex: 1,
  },
});

export default Avatar;
