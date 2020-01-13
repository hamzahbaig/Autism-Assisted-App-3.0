import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import Screens
import SplashScreen from './screens/SplashScreen/SplashScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AutismInChildren from './screens/AutismInChildren/AutismInChildren';
import AutismBasics from './screens/AutismBasics/AutismBasics';
import AutismInAdults from './screens/AutismInAdults/AutismInAdults';
import AutismInAdultsCategroies from './screens/AutismInAdults/AutismInAdultsCategories';
import FAQs from './screens/FAQs/FAQs';
import FAQScreen from './screens/FAQs/FAQScreen';
import AutismBasicsCategories from './screens/AutismBasics/AutismBasicsCategories';
import AutismInChildrenCategories from './screens/AutismInChildren/AutismInChildrenCategories';
const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    HomeScreen: {
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
    AutismInAdultsCategroies: {
      screen: AutismInAdultsCategroies,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    FAQs: {
      screen: FAQs,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    FAQScreen: {
      screen: FAQScreen,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    AutismBasicsCategories: {
      screen: AutismBasicsCategories,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    AutismInChildrenCategories: {
      screen: AutismInChildrenCategories,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
  },
  // {initialRouteName: 'AutismInAdultsCategroies'},
);

export default createAppContainer(AppNavigator);
