import React, {type ReactNode} from 'react';
import {KeyboardAvoidingView, View, StyleSheet} from 'react-native';

type FormContainer = {
  header: ReactNode;
  children: ReactNode;
};

const FormContainer = ({children, header}: FormContainer) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.content}
      behavior="position">
      <View style={styles.header}>{header}</View>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    alignSelf: 'stretch',
  },
  content: {
    paddingBottom: 32,
    rowGap: 16,
  },
  header: {
    marginBottom: 32,
    rowGap: 16,
    alignItems: 'center',
  },
});

export default FormContainer;
