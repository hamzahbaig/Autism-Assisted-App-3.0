import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardBox from '../components/CardBox';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: () => (
      <View style={{width: 200, height: 50, backgroundColor: 'red'}}>
        <Icon name="rocket" size={30} />
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
    fontSize: 14,
    color: '#707070',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '27%',
    marginTop: 20,
  },
});
