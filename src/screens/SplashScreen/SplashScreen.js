import React from 'react';
import {View, StatusBar, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  state = {
    firstHalf: false,
    secondHalf: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({firstHalf: true});
    }, 500);
    setTimeout(() => {
      this.setState({secondHalf: true});
    }, 1500);
    setTimeout(() => {
      this.props.navigation.navigate('HomeScreen');
    }, 2500);
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Animatable.View animation="slideInLeft">
              <Image
                style={{width: 150, height: 150}}
                source={require('../../assets/images/loga_beta_logo.png')}
              />
            </Animatable.View>
            <View style={styles.textContainer}>
              {this.state.firstHalf ? (
                <Animatable.View style={{width: '100%'}} animation="fadeIn">
                  <Image
                    style={{width: '100%', height: 40}}
                    source={require('../../assets/images/loga_beta_autism.png')}
                  />
                  <Image
                    style={{width: 90, height: 20}}
                    source={require('../../assets/images/loga_beta_assisted.png')}
                  />
                </Animatable.View>
              ) : null}
              {/* {this.state.secondHalf ? (
                <Animatable.View animation="fadeIn"></Animatable.View>
              ) : null} */}
            </View>
          </View>
        </View>
      </React.Fragment>
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
