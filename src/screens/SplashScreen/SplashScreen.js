import React from 'react';
import {View, StatusBar, StyleSheet, Image} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../assets/images/loga_beta_logo.png')}
          />
          <View style={styles.textContainer}>
            <Image
              style={{width: '100%', height: 40}}
              source={require('../../assets/images/loga_beta_autism.png')}
            />
            <Image
              style={{width: 90, height: 20}}
              source={require('../../assets/images/loga_beta_assisted.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#20266A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 3,
  },
});
