import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '@shared/components/Typography';
import Avatar from './Avatar';
import useFirebaseUser from '@shared/hooks/useFirebaseUser';

const Header = () => {
  const user = useFirebaseUser();

  const renderUserName = () => {
    return user?.displayName ?? user?.email?.split('@')[0];
  };

  return (
    <View style={styles.container}>
      <Heading>Hi, {renderUserName() || 'user'} 👋</Heading>
      <Avatar uri="https://source.unsplash.com/random" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
