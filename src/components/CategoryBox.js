import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Settings,
} from 'react-native';
import {englishFonts, urduFonts} from '../assets/fonts/Fonts';

const phoneHeight = Dimensions.get('window').height;

export default class CategoryBox extends React.Component {
  render() {
    return (
      <View style={styles.categoryBoxContainer}>
        <View
          style={[
            styles.innerContainer,
            {
              flexDirection:
                this.props.reverseFlag == 'english' ? 'row' : 'row-reverse',
            },
          ]}>
          <Image
            style={styles.imageContainer}
            source={require('../assets/images/logo.png')}
          />
          <View
            style={[
              styles.categoryContentContainer,
              this.props.reverseFlag == 'english'
                ? {paddingLeft: 7}
                : {paddingRight: 7},
            ]}>
            <Text
              style={[
                styles.categoryHeadingStyle,
                {
                  fontSize: this.props.fontSize.content,
                  fontFamily: this.props.fontFamilyHeading,
                },
              ]}>
              {this.props.innerSection[0]}
            </Text>
            <Text
              style={[
                styles.categoryDescriptionStyle,
                {
                  fontSize: this.props.fontSize.content,
                  fontFamily: this.props.fontFamilyDescription,
                },
              ]}>
              {this.props.innerSection[1]}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryBoxContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  innerContainer: {
    height: '80%',
    width: '96%',
    alignItems: 'center',
  },
  imageContainer: {
    height: '90%',
    width: '25%',
  },
  categoryContentContainer: {
    height: '100%',
    width: '75%',
    // paddingLeft: 7,
  },
  categoryHeadingStyle: {
    paddingTop: 4,
  },
  categoryDescriptionStyle: {
    paddingTop: 7,
  },
});
