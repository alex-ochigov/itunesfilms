import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Sample from './screens/Sample';

const RootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Sample" component={Sample} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
