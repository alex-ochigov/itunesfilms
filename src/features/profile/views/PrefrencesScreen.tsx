import React from 'react';
import {SafeAreaView, View, Switch, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Text from '@shared/components/Typography';
import useColorScheme from '@shared/hooks/useColorScheme';
import {useTheme} from '@shared/theme/styled-components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from '../types';
import type {ITheme} from '@shared/theme/theme';
import Header from '../components/Header';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

type PreferencesScreenType = NativeStackScreenProps<
  ProfileStackParamList,
  'Preferences'
>;

const PreferencesScreen = ({navigation}: PreferencesScreenType) => {
  const {currentScheme, reverseColorSheme} = useColorScheme();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const styles = getStyles({theme, insets});

  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Preferences" />

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.title}>
            <Ionicons
              name="moon-outline"
              size={24}
              color={theme.colors.primary}
            />
            <Text>Dark Theme</Text>
          </View>

          <Switch
            value={currentScheme === 'dark'}
            onValueChange={reverseColorSheme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

type StylesProps = {
  theme: ITheme;
  insets: EdgeInsets;
};

const getStyles = ({theme, insets}: StylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: Math.max(insets.top, 16),
      backgroundColor: theme.colors.background,
    },
    content: {
      marginTop: 32,
    },
    row: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
  });

export default PreferencesScreen;
