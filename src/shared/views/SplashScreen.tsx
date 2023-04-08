import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@shared/types';
import Animated from 'react-native-reanimated';
import Logo from '@shared/components/Logo';

type SplashScreenType = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: SplashScreenType) => {
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    // short delay
    setTimeout(() => {
      if (user) {
        // check onboarding?
        //  - navigate to onboarding
        // navigate to home
        navigation.replace('Home');
      } else {
        navigation.replace('Auth');
        // navigate to auth
      }
    }, 350);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render actual splash screen
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View sharedTransitionTag="app-logo">
          <Logo />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
