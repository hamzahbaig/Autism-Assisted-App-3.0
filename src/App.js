import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: CategoryScreen,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
});

export default createAppContainer(AppNavigator);
