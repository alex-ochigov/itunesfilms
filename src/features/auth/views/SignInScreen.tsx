import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import type {AuthStackParamList} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenType = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: SignInScreenType) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
