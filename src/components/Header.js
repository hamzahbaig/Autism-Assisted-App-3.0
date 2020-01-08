import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import SearchBox from '../components/SearchBox';
import ControlPanel from '../components/ControlPanel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
export default class Header extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

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
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={this.props.backHandler}>
            <Icon name={'keyboard-backspace'} size={30} color={'white'} />
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            style={[styles.settingIconContainer]}>
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
              modalVisible={this.state.modalVisible}
              setModalVisible={this.setModalVisible}
            />
          </TouchableOpacity>
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
  backButtonContainer: {
    width: phoneWidth * 0.1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: phoneWidth * 0.8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingIconContainer: {
    width: phoneWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
