import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Text from '@shared/components/Typography';
import auth from '@react-native-firebase/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from '../types';
import type {ITheme} from '@shared/theme/theme';
import {useTheme} from '@shared/theme/styled-components';
import useColorScheme from '@shared/hooks/useColorScheme';

type ProfileScreenType = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenType) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const {currentScheme, reverseColorSheme} = useColorScheme();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(StackActions.replace('Auth'));
      // replace to auth
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <View style={styles.themeSwitcher}>
        <Text>Dark theme:</Text>
        <Switch
          value={currentScheme === 'dark'}
          onValueChange={reverseColorSheme}
        />
      </View>
    </SafeAreaView>
  );
};

const getStyles = ({colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    themeSwitcher: {
      padding: 32,
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default ProfileScreen;
