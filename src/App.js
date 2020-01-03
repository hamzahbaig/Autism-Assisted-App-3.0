import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import AutismInChildren from './screens/AutismInChildren';
import AutismBasics from './screens/AutismBasics';
import AutismInAdults from './screens/AutismInAdults'

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
  AutismInChildren: {
    screen: AutismInChildren,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
  AutismBasics: {
    screen: AutismBasics,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
  AutismInAdults: {
    screen: AutismInAdults,
    navigationOptions: {
      title: null,
      headerStyle: {
        backgroundColor: '#20266A',
      },
    },
  },
});

export default createAppContainer(AppNavigator);
