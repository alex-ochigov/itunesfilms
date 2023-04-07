import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@shared/types';

type SplashScreenType = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({navigation}: SplashScreenType) => {
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      // check onboarding?
      //  - navigate to onboarding
      // navigate to home
      navigation.replace('Home');
    } else {
      navigation.replace('Auth');
      // navigate to auth
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render actual splash screen
  return <View />;
};

export default SplashScreen;
