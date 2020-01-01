import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';
import {Input} from 'react-native-elements';

export default class SearchBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input
          placeholder="Search"
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={{fontSize:14, fontFamily: "avenirltstd-medium"}}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '93%',
    height: '67%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
