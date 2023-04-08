import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const useHideBottomTabs = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent('tabs').setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () =>
      navigation.getParent('tabs').setOptions({
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
        },
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useHideBottomTabs;
