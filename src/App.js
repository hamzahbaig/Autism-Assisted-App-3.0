import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AutismInChildren from './screens/AutismInChildren/AutismInChildren';
import AutismBasics from './screens/AutismBasics/AutismBasics';
import AutismInAdults from './screens/AutismInAdults/AutismInAdults';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: null,
      header: null,
    },
  },
  AutismInChildren: {
    screen: AutismInChildren,
    navigationOptions: {
      title: null,
      header: null,
    },
  },
  AutismBasics: {
    screen: AutismBasics,
    navigationOptions: {
      title: null,
      header: null,
    },
  },
  AutismInAdults: {
    screen: AutismInAdults,
    navigationOptions: {
      title: null,
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
