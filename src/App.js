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
      headerShown: false,
    },
  },
  AutismInChildren: {
    screen: AutismInChildren,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  AutismBasics: {
    screen: AutismBasics,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  AutismInAdults: {
    screen: AutismInAdults,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);
