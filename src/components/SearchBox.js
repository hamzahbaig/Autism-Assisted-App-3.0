import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Input} from 'react-native-elements';
export default class SearchBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input
          placeholder={this.props.searchTitle.text}
          placeholderTextColor={'#707070'}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={[
            {
              fontSize: this.props.fontSize,
              fontFamily: this.props.searchTitle.fontFamily,
            },
            this.props.languageSettings == 'urdu'
              ? Platform.OS == 'ios'
                ? {textAlign: 'right'}
                : null
              : null,
            Platform.OS == 'ios' ? {marginTop: 4} : null,
          ]}
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
