import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';

export default class AutismBasics extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
  };

  static navigationOptions = {
    headerRight: () => (
      <View style={styles.settingIconContainer}>
        <Icon name="md-settings" size={28} color="white" />
      </View>
    ),
    headerLeft: () => (
      <View style={styles.searchBarContainer}>
        <SearchBox />
      </View>
    ),
  };

  fontSizeHandler = key => {
    if (key == 's') {
      this.setState({fontSize: engFontSizes.eng_S});
    } else if (key == 'm') {
      this.setState({fontSize: engFontSizes.eng_M});
    } else {
      this.setState({fontSize: engFontSizes.eng_L});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text
            style={[
              styles.mainHeadingFont,
              {fontSize: this.state.fontSize.heading},
            ]}>
            Autism Basics
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainHeadingContainer: {
    width: '100%',
    height: '4%',
    marginTop: 20,
  },
  mainHeadingFont: {
    color: '#707070',
    fontFamily: Fonts.avenirBlack,
  },
  settingIconContainer: {
    width: phoneWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: phoneWidth * 0.9,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    width: '100%',
    marginTop: 20,
  },
  descriptionStyle: {
    fontFamily: Fonts.avenirLight,
    lineHeight: 15,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionStyling: {
    color: '#04B874',
    fontFamily: Fonts.avenirBlack,
  },
  scrollViewContainer: {
    height: '100%',
    width: phoneWidth,
    marginTop: 20,
  },
  innerScrollViewContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});
