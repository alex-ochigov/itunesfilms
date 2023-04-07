import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {ProfileStackParamList} from '../types';

type ProfileScreenType = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenType) => {
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
