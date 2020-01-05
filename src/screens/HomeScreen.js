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
import {englishFonts, urduFonts} from '../assets/fonts/Fonts';
import eng from '../content/eng.json';
import urdu from '../content/urdu.json';
import Settings from '../settings/Settings.json';
import {engFontSizes, urduFontSizes} from '../settings/FontSizes';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  state = {
    content:
      Settings.currentLanguage == 'english' ? eng.homeScreen : urdu.homeScreen,
    fontSize:
      Settings.currentLanguage == 'english'
        ? engFontSizes.eng_M
        : urduFontSizes.urdu_M,
    fontFamily: Settings.currentLanguage == 'english' ? null : urduFonts,
  };

  fontSizeHandler = key => {
    if (Settings.currentLanguage == 'english') {
      if (key == 's') {
        Settings.currentFontSettings = 's';
        this.setState({fontSize: engFontSizes.eng_S});
      } else if (key == 'm') {
        Settings.currentFontSettings = 'm';
        this.setState({fontSize: engFontSizes.eng_M});
      } else if (key == 'l') {
        Settings.currentFontSettings = 'l';
        this.setState({fontSize: engFontSizes.eng_L});
      }
    } else if (Settings.currentLanguage == 'urdu') {
      if (key == 's') {
        Settings.currentFontSettings = 's';
        this.setState({fontSize: urduFontSizes.urdu_S});
      } else if (key == 'm') {
        Settings.currentFontSettings = 'm';
        this.setState({fontSize: urduFontSizes.urdu_M});
      } else if (key == 'l') {
        Settings.currentFontSettings = 'l';
        this.setState({fontSize: urduFontSizes.urdu_L});
      }
    }
  };

  changeLanguage = () => {
    console.log(Settings.currentLanguage);
    if (Settings.currentLanguage == 'english') {
      Settings.currentLanguage = 'urdu';
      this.setState({content: urdu.homeScreen, fontSize: urduFontSizes.urdu_M});
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      this.setState({content: eng.homeScreen, fontSize: engFontSizes.eng_M});
    }
  };

  calculateFontFamily = key => {
    if (Settings.currentLanguage == 'urdu') {
      return urduFonts.nafees;
    } else if (Settings.currentLanguage == 'english') {
      if (key == 'black') {
        return englishFonts.avenirBlack;
      } else if (key == 'medium') {
        return englishFonts.avenirMedium;
      } else if (key == 'light') {
        return englishFonts.avenirLight;
      } else if (key == 'heavy') {
        return englishFonts.avenirHeavy;
      }
    }
  };

  intialise = () => {
    this.fontSizeHandler(Settings.currentFontSettings);
    this.setState({
      content:
        Settings.currentLanguage == 'english'
          ? eng.homeScreen
          : urdu.homeScreen,
      // fontSize:
      //   Settings.currentLanguage == 'english'
      //     ? engFontSizes.eng_M
      //     : urduFontSizes.urdu_M,
    });
  };

  componentDidMount() {
    this.intialise();
  }

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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text
            style={[
              styles.mainHeadingFont,
              {
                fontSize: this.state.fontSize.heading,
                fontFamily: this.calculateFontFamily('black'),
              },
            ]}>
            {this.state.content['title']}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <CardBox
            title={this.state.content['category'][0]}
            fontSize={this.state.fontSize}
            fontFamily={this.calculateFontFamily('medium')}
            onClick={() =>
              this.props.navigation.navigate('AutismBasics', {
                refresh: this.intialise,
              })
            }
          />
          <CardBox
            title={this.state.content['category'][1]}
            fontSize={this.state.fontSize}
            fontFamily={this.calculateFontFamily('medium')}
            onClick={() =>
              this.props.navigation.navigate('AutismInChildren', {
                refresh: this.intialise,
              })
            }
          />
        </View>
        <View style={styles.rowContainer}>
          <CardBox
            title={this.state.content['category'][2]}
            fontSize={this.state.fontSize}
            fontFamily={this.calculateFontFamily('medium')}
            onClick={() =>
              this.props.navigation.navigate('AutismInAdults', {
                refresh: this.intialise,
              })
            }
          />
          <CardBox
            title={this.state.content['category'][3]}
            fontSize={this.state.fontSize}
            fontFamily={this.calculateFontFamily('medium')}
          />
        </View>
        <Button title={'Small'} onPress={() => this.fontSizeHandler('s')} />
        <Button title={'Medium'} onPress={() => this.fontSizeHandler('m')} />
        <Button title={'Large'} onPress={() => this.fontSizeHandler('l')} />
        <Button title={'Change Language'} onPress={this.changeLanguage} />
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
