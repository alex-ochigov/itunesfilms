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
  const [confPassword, setConfPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <Layout footer={<PrimaryButton onPress={handleSubmit} text="Register" />}>
      <FormContainer
        header={
          <>
            <Heading>Create an account.</Heading>
            <LinkButton
              onPress={() => navigation.goBack()}
              text="Already have an account?"
              linkText="Sign In"
            />
          </>
        }>
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

        <Input
          type="password"
          onChangeText={text => setConfPassword(text)}
          value={confPassword}
          placeholder="Confirm your password"
          icon={
            <Ionicons name="lock-closed-outline" size={24} color="#d1d1d1" />
          }
        />
      </FormContainer>
    </Layout>
  );
};

export default SignInScreen;
