import React from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import SearchBox from '../components/SearchBox';
import ControlPanel from '../components/ControlPanel';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
export default class Header extends React.Component {
  render() {
    return (
      <View>
        {Platform.OS == 'ios' ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              backgroundColor: '#2C326F',
              height: 35,
              width: phoneWidth,
            }}></View>
        ) : null}
        <View
          style={[
            styles.container,
            {
              flexDirection:
                this.props.reverseFlag == 'english' ? 'row' : 'row-reverse',
              marginTop: Platform.OS == 'ios' ? 35 : 0,
            },
          ]}>
          <View
            style={[
              styles.searchBarContainer,
              this.props.reverseFlag == 'english' ? null : {marginRight: 5},
            ]}>
            <SearchBox
              languageSettings={this.props.languageSettings}
              fontSize={this.props.fontSize.content}
              searchTitle={
                this.props.reverseFlag == 'english'
                  ? {text: 'Search', fontFamily: this.props.fontFamilyHeading}
                  : {
                      text: 'سرچ',
                      fontFamily: this.props.fontFamilyUrdu,
                    }
              }
            />
          </View>
          <View
            style={[
              styles.settingIconContainer,
              this.props.reverseFlag == 'english'
                ? {marginRight: 35}
                : {marginLeft: 40},
            ]}>
            <ControlPanel
              languageSettings={this.props.languageSettings}
              fontSettings={this.props.fontSettings}
              contrast={this.props.contrast}
              fontSizeHandler={this.props.fontSizeHandler}
              changeLanguage={this.props.changeLanguage}
              fontFamilyHeading={this.props.fontFamilyHeading}
              fontFamilyOption={this.props.fontFamilyOption}
              fontFamilyUrdu={this.props.fontFamilyUrdu}
              contrastChanger={this.props.contrastChanger}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.08,
    width: phoneWidth,
    backgroundColor: '#20266A',
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
  },
});
