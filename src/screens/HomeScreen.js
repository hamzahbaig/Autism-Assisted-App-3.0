import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardBox from '../components/CardBox';
import SearchBox from '../components/SearchBox';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: () => (
      <View style={styles.settingIconContainer}>
        <Icon name="md-settings" size={30} color="white" />
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
          <Text style={styles.mainHeadingFont}>Home</Text>
        </View>
        <View style={styles.rowContainer}>
          <CardBox title={'Autism Basics'} />
          <CardBox title={'Autism in Children'} />
        </View>
        <View style={styles.rowContainer}>
          <CardBox title={'Autism in Adults'} />
          <CardBox title={'Video Gallery'} />
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
    fontFamily: "avenirltstd-black"
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '27%',
    marginTop: 20,
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
});
