import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const PlaceholderComponent = () => {
  return <View />;
};

const Home = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="FeedTab" component={PlaceholderComponent} />
      <Tabs.Screen name="SearchTab" component={PlaceholderComponent} />
      <Tabs.Screen name="ProfileTab" component={PlaceholderComponent} />
    </Tabs.Navigator>
  );
};

export default Home;
