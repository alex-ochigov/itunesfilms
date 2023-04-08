import React, {useState} from 'react';
import {Alert} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import LinkButton from '../components/LinkButton';
import FormContainer from '../components/FormContainer';
import PrimaryButton from '../components/PrimaryButton';
import Layout from '../components/Layout';
import Input from '../components/Input';
import {Heading} from '@shared/components/Typography';
import type {AuthStackParamList, AuthError} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ErrorMessage from '../components/ErrorMessage';

type SignInScreenType = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: SignInScreenType) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const resp = await auth().signInWithEmailAndPassword(email, password);
      if (resp) {
        navigation.dispatch(StackActions.replace('Home'));
      }
    } catch (err) {
      console.log(err);
      if (err.code === 'auth/email-already-in-use') {
        setError({
          code: 'auth/wrong-password',
          message: 'Email or password is wrong',
        });
      } else if (err.code === 'auth/invalid-email') {
        setError({
          code: 'auth/invalid-email',
          message: 'That email address is invalid!',
        });
      } else {
        Alert.alert('Error', 'something went wrong', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    }
    setLoading(false);
  };

  return (
    <Layout
      logoTransitionTag="app-logo"
      footer={
        <>
          <PrimaryButton
            onPress={handleSubmit}
            text="Sign In"
            disabled={loading}
          />
          <LinkButton
            onPress={() => navigation.navigate('Register')}
            text="Don't have an account?"
            linkText="Sign Up"
            disabled={loading}
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
        {error && <ErrorMessage text={error.message} />}
      </FormContainer>
    </Layout>
  );
};

export default SignInScreen;
