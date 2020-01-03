import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../assets/fonts/Fonts';

const phoneHeight = Dimensions.get('window').height;

export default class CategoryBox extends React.Component {
  render() {
    return (
      <View style={styles.categoryBoxContainer}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.imageContainer}
            source={require('../assets/images/logo.png')}
          />
          <View style={styles.categoryContentContainer}>
            <Text
              style={[
                styles.categoryHeadingStyle,
                {fontSize: this.props.fontSize.content},
              ]}>
              Understanding Your Children
            </Text>
            <Text
              style={[
                styles.categoryDescriptionStyle,
                {fontSize: this.props.fontSize.content},
              ]}>
              Learn important milestones about your child and signs of
              developing ASD.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryBoxContainer: {
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  innerContainer: {
    height: '80%',
    width: '96%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: '90%',
    width: '25%',
  },
  categoryContentContainer: {
    height: '100%',
    width: '75%',
    paddingLeft: 7,
  },
  categoryHeadingStyle: {
    fontFamily: Fonts.avenirHeavy,
    paddingTop: 4,
  },
  categoryDescriptionStyle: {
    fontFamily: Fonts.avenirLight,
    paddingTop: 7,
  },
});
