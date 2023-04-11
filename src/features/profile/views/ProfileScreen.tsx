import React from 'react';
import {SafeAreaView, ScrollView, View, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Text from '@shared/components/Typography';
import auth from '@react-native-firebase/auth';
import {useTheme} from '@shared/theme/styled-components';
import useFirebaseUser from '@shared/hooks/useFirebaseUser';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from '../types';
import type {ITheme} from '@shared/theme/theme';
import ProfileMenuItem from '../components/ProfileMenuItem';

type ProfileScreenType = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenType) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const user = useFirebaseUser();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(StackActions.replace('Auth'));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://source.unsplash.com/random'}}
          />
        </View>

        <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{user?.displayName || 'Test'}</Text>
        </View>
        <View>
          {user?.email && (
            <Text style={styles.usernameText}>@{user.email.split('@')[0]}</Text>
          )}
        </View>
      </View>
      <View style={styles.menu}>
        <ScrollView contentContainerStyle={styles.menuContent}>
          <ProfileMenuItem
            leadingIconName="person-outline"
            name="Personal Data"
            onPress={() => {}}
          />

          <ProfileMenuItem
            leadingIconName="cog-outline"
            name="Preferences"
            onPress={() => navigation.navigate('Preferences')}
          />

          <ProfileMenuItem
            leadingIconName="lock-open-outline"
            name="Change Password"
            onPress={() => {}}
          />

          <ProfileMenuItem
            leadingIconName="log-out-outline"
            name="Sign out"
            onPress={handleLogout}
          />
        </ScrollView>
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
    info: {
      alignItems: 'center',
      marginTop: 32,
      marginBottom: 32,
    },
    avatarWrapper: {
      marginBottom: 16,
    },
    avatar: {
      height: 140,
      width: 140,
      borderRadius: 100,
      backgroundColor: colors.lighGrey,
    },
    nameWrapper: {
      marginBottom: 4,
    },
    nameText: {
      fontSize: 32,
    },
    menu: {
      flex: 1,
    },
    usernameText: {
      fontSize: 16,
      color: colors.darkGrey,
    },
    menuContent: {
      justifyContent: 'flex-start',
      paddingBottom: 60,
    },
    row: {
      marginHorizontal: 16,
      paddingVertical: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default ProfileScreen;
