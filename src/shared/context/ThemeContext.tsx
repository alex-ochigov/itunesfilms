import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from '@shared/theme/styled-components';
import * as themes from '../theme/theme';

type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  currentScheme: ColorScheme;
  updateColorScheme: (colorScheme: ColorScheme) => void;
  reverseColorSheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(
    () => Appearance.getColorScheme() || 'light',
  );

  const updateColorScheme = useCallback((colorScheme: ColorScheme) => {
    setCurrentScheme(colorScheme);
  }, []);

  const reverseColorSheme = useCallback(() => {
    if (currentScheme === 'light') {
      return setCurrentScheme('dark');
    }

    return setCurrentScheme('light');
  }, [currentScheme]);

  const getBarStyle = () => {
    return currentScheme === 'dark' ? 'light-content' : 'dark-content';
  };

  const getTheme = () => {
    return themes[currentScheme];
  };

  const value = useMemo(() => {
    return {currentScheme, updateColorScheme, reverseColorSheme};
  }, [currentScheme, updateColorScheme, reverseColorSheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={getTheme()}>
        <StatusBar animated={true} barStyle={getBarStyle()} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
