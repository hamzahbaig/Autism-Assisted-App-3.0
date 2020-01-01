import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

export default class CardBox extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.mainContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/images/logo.png')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleFont}>{this.props.title}</Text>
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
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "avenirltstd-medium"
  },
});
