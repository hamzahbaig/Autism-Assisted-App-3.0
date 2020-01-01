import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Text} from 'react-native';
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
});

export default createAppContainer(AppNavigator);
