import 'react-native-gesture-handler';

import React from 'react';
import ThemeProvider from './context/ThemeContext';
import Routes from './Routes';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
