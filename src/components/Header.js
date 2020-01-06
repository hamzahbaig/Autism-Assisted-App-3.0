import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SearchBox from '../components/SearchBox';
import ControlPanel from '../components/ControlPanel';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBox fontSize={14} />
        </View>
        <View style={styles.settingIconContainer}>
          <ControlPanel
            fontSizeHandler={this.props.fontSizeHandler}
            changeLanguage={this.props.changeLanguage}
            fontFamilyHeading={this.props.fontFamilyHeading}
            fontFamilyOption={this.props.fontFamilyOption}
            fontFamilyUrdu={this.props.fontFamilyUrdu}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: phoneHeight*0.08,
    width: phoneWidth,
    backgroundColor: '#20266A',
    flexDirection: 'row',
  },
  searchBarContainer: {
    width: phoneWidth * 0.88,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingIconContainer: {
    width: phoneWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 35,
  },
});