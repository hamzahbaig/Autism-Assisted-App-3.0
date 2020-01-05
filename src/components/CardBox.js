import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {englishFonts, urduFonts} from '../assets/fonts/Fonts';

export default class CardBox extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={this.props.onClick}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/images/logo.png')}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.titleFont,
              {
                fontSize: this.props.fontSize.content,
                fontFamily: this.props.fontFamily,
              },
            ]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '45%',
    borderRadius: 8,
    elevation: 15,
  },
  imageContainer: {
    height: '75%',
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  titleContainer: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  titleFont: {
    marginLeft: 10,
    marginRight: 5,
  },
});
