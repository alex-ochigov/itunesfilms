import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinkButton from '../components/LinkButton';
import FormContainer from '../components/FormContainer';
import PrimaryButton from '../components/PrimaryButton';
import Layout from '../components/Layout';
import Input from '../components/Input';
import {Heading} from '@shared/components/Typography';
import type {AuthStackParamList} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenType = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: SignInScreenType) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <Layout
      logoTransitionTag="app-logo"
      footer={
        <>
          <PrimaryButton onPress={handleSubmit} text="Sign In" />
          <LinkButton
            onPress={() => navigation.navigate('Register')}
            text="Don't have an account?"
            linkText="Sign Up"
          />
        </>
      }>
      <FormContainer header={<Heading>Welcome back!</Heading>}>
        <Input
          type="text"
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Enter your email"
          icon={<Ionicons name="mail-outline" size={24} color="#d1d1d1" />}
        />

        <Input
          type="password"
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Enter your password"
          icon={
            <Ionicons name="lock-closed-outline" size={24} color="#d1d1d1" />
          }
        />
      </FormContainer>
    </Layout>
  );
};

export default SignInScreen;
