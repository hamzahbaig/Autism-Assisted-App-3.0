import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const phoneHeight = Dimensions.get('window').height;

export default class CategoryBox extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.categoryBoxContainer}
        onPress={this.props.screenChangeHandler}>
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
            source={this.props.image}
          />
          <View
            style={[
              styles.categoryContentContainer,
              this.props.reverseFlag == 'english'
                ? {paddingLeft: 15}
                : {paddingRight: 15},
            ]}>
            <Text
              style={[
                styles.categoryHeadingStyle,
                {
                  fontSize: this.props.fontSize.content,
                  fontFamily: this.props.fontFamilyHeading,
                  textAlign: this.props.reverseFlag == 'urdu' ? 'right' : null,
                },
              ]}>
              {this.props.innerSection}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  categoryBoxContainer: {
    height: phoneHeight * 0.09,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  innerContainer: {
    height: '90%',
    width: '96%',
    alignItems: 'center',
  },
  imageContainer: {
    height: '95%',
    width: '20%',
    borderRadius: 8,
  },
  categoryContentContainer: {
    height: '90%',
    width: '100%',
    justifyContent: 'center',
  },
  categoryHeadingStyle: {
    paddingTop: 4,
  },
});
