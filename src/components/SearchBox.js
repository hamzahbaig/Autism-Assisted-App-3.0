import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {englishFonts,urduFonts} from '../assets/fonts/Fonts';
export default class SearchBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input
          placeholder={'Search'}
          placeholderTextColor={'#707070'}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={{borderBottomWidth: 0}}
          inputStyle={[
            styles.inputStyling,
            {fontSize: 14},
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
  inputStyling: {
    fontFamily: englishFonts.avenirMedium,
  },
});
