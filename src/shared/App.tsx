import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ThemeProvider from './context/ThemeContext';
import Routes from './Routes';
import {enableScreens} from 'react-native-screens';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 0,
    },
  },
});

const App = () => {
  useEffect(() => {
    // issue: https://github.com/react-navigation/react-navigation/issues/10432
    // hidden tabbar with { display: 'none' }
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
