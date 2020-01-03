import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardBox from '../components/CardBox';
import SearchBox from '../components/SearchBox';
import {Fonts} from '../assets/fonts/Fonts';
import eng from '../content/eng.json';
import {engFontSizes} from '../settings/EnglishFontConfig';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  state = {
    content: eng,
    fontSize: engFontSizes.eng_M,
  };

  // componentDidMount() {
  //   this.props.navigation.setParams({
  //     fontSize: this.state.fontSize,
  //   });
  // }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerRight: () => (
        <View style={styles.settingIconContainer}>
          <Icon name="md-settings" size={28} color="white" />
        </View>
      ),
      headerLeft: () => (
        <View style={styles.searchBarContainer}>
          <SearchBox fontSize={14} />
        </View>
      ),
    };
  };

  fontSizeHandler = key => {
    if (key == 's') {
      this.setState({fontSize: engFontSizes.eng_S});
    } else if (key == 'm') {
      this.setState({fontSize: engFontSizes.eng_M});
    } else {
      this.setState({fontSize: engFontSizes.eng_L});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text
            style={[
              styles.mainHeadingFont,
              {fontSize: this.state.fontSize.heading},
            ]}>
            {this.state.content['homeScreen']['title']}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <CardBox
            title={this.state.content['homeScreen']['category'][0]}
            fontSize={this.state.fontSize}
          />
          <CardBox
            title={this.state.content['homeScreen']['category'][1]}
            fontSize={this.state.fontSize}
            onClick={() => this.props.navigation.navigate('AutismInChildren')}
          />
        </View>
        <View style={styles.rowContainer}>
          <CardBox
            title={this.state.content['homeScreen']['category'][2]}
            fontSize={this.state.fontSize}
          />
          <CardBox
            title={this.state.content['homeScreen']['category'][3]}
            fontSize={this.state.fontSize}
          />
        </View>
        <Button title={'Small'} onPress={() => this.fontSizeHandler('s')} />
        <Button title={'Medium'} onPress={() => this.fontSizeHandler('m')} />
        <Button title={'Large'} onPress={() => this.fontSizeHandler('l')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainHeadingContainer: {
    width: '100%',
    height: '4%',
    marginTop: 20,
  },
  mainHeadingFont: {
    color: '#707070',
    fontFamily: Fonts.avenirBlack,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: phoneHeight * 0.22,
    marginTop: 20,
  },
  settingIconContainer: {
    width: phoneWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: phoneWidth * 0.9,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
