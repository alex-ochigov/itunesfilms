import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import type {AuthStackParamList} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenType = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen = ({navigation}: SignInScreenType) => {
  const handleAnon = async () => {
    try {
      const res = await auth().signInAnonymously();
      if (res) {
        navigation.dispatch(StackActions.replace('Home'));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register Screen</Text>
      <TouchableOpacity onPress={handleAnon}>
        <Text>Anon</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
