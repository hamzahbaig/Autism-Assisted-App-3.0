import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBox from '../components/SearchBox';
import {Fonts} from '../assets/fonts/Fonts';
import CategoryBox from '../components/CategoryBox';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class CategoryScreen extends React.Component {
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
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text style={styles.mainHeadingFont}>Autism in Children</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyle}>
            Learn important information about autism spectrum disorder in
            children and making sure your children get the help and attention
            they require
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionStyling}>
            Section 1: Development in Children
          </Text>
        </View>
        <View style={{height: '100%', width: '100%'}}>
          <CategoryBox />
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
    fontSize: 20,
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
    fontSize: 14,
    fontFamily: Fonts.avenirLight,
    lineHeight: 15,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 20,
  },
  sectionStyling: {
    fontSize: 20,
    color: '#04B874',
    fontFamily: Fonts.avenirBlack,
  },
});
