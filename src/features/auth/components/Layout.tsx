import React, {type ReactNode} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Logo from '@shared/components/Logo';

type LayoutProps = {
  logoTransitionTag?: string;
  children: ReactNode;
  footer: ReactNode;
};

const Layout = ({children, footer, logoTransitionTag}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo sharedTransitionTag={logoTransitionTag} />
      </View>
      {children}
      <View style={styles.footer}>{footer}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoWrapper: {
    marginVertical: 120,
  },
  footer: {
    alignItems: 'center',
    rowGap: 12,
  },
});

export default Layout;
