import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const useColorScheme = () => {
  return useContext(ThemeContext);
};

export default useColorScheme;
