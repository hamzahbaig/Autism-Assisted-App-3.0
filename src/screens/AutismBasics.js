import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
  ScrollView,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBox from '../components/SearchBox';
import {englishFonts, urduFonts} from '../assets/fonts/Fonts';
import CategoryBox from '../components/CategoryBox';
import {engFontSizes, urduFontSizes} from '../settings/FontSizes';
import Settings from '../settings/Settings.json';
import eng from '../content/eng.json';
import urdu from '../content/urdu.json';
import Header from '../components/Header';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class AutismBasics extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
    content:
      Settings.currentLanguage == 'english'
        ? eng.autismBasics
        : urdu.autismBasics,
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
      } else {
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
      } else {
        Settings.currentFontSettings = 'l';
        this.setState({fontSize: urduFontSizes.urdu_L});
      }
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
  changeLanguage = () => {
    if (Settings.currentLanguage == 'english') {
      Settings.currentLanguage = 'urdu';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: urdu.autismBasics,
        fontSize: urduFontSizes.urdu_M,
      });
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: eng.autismBasics,
        fontSize: engFontSizes.eng_M,
      });
    }
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
    this.fontSizeHandler(Settings.currentFontSettings);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.state.params.refresh();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <Header
          languageSettings={Settings.currentLanguage}
          fontSettings={Settings.currentFontSettings}
          fontSizeHandler={this.fontSizeHandler}
          changeLanguage={this.changeLanguage}
          fontFamilyHeading={englishFonts.avenirMedium}
          fontFamilyOption={englishFonts.avenirMedium}
          fontFamilyUrdu={urduFonts.nafees}
          reverseFlag={Settings.currentLanguage}
          fontSize={this.state.fontSize}
        />
        <View style={styles.mainHeadingContainer}>
          <Text
            style={[
              styles.mainHeadingFont,
              {
                fontSize: this.state.fontSize.heading,
                fontFamily: this.calculateFontFamily('black'),
              },
            ]}>
            {this.state.content.title}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={[
              styles.descriptionStyle,
              {
                fontSize: this.state.fontSize.content,
                fontFamily: this.calculateFontFamily('light'),
              },
            ]}>
            {this.state.content.description}
          </Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.innerScrollViewContainer}>
            {this.state.content.questions.map(x => (
              <CategoryBox
                fontSize={this.state.fontSize}
                innerSection={x}
                fontFamilyHeading={this.calculateFontFamily('heavy')}
                fontFamilyDescription={this.calculateFontFamily('light')}
                reverseFlag={Settings.currentLanguage}
              />
            ))}
          </View>
        </ScrollView>
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
    fontFamily: englishFonts.avenirBlack,
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
  descriptionContainer: {
    width: '100%',
    marginTop: 20,
  },
  descriptionStyle: {
    fontFamily: englishFonts.avenirLight,
    lineHeight: 15,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionStyling: {
    color: '#04B874',
    fontFamily: englishFonts.avenirBlack,
  },
  scrollViewContainer: {
    height: '100%',
    width: phoneWidth,
    marginTop: 20,
  },
  innerScrollViewContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});
