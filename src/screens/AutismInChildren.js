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
import {englishFonts, urduFonts} from '../assets/fonts/Fonts';
import CategoryBox from '../components/CategoryBox';
import {engFontSizes, urduFontSizes} from '../settings/FontSizes';
import Settings from '../settings/Settings.json';
import eng from '../content/eng.json';
import urdu from '../content/urdu.json';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
import Header from '../components/Header';

export default class AutismInChildren extends React.Component {
  state = {
    content:
      Settings.currentLanguage == 'english'
        ? eng.autismInChildren
        : urdu.autismInChildren,
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
      this.setState({content: urdu.homeScreen, fontSize: urduFontSizes.urdu_M});
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({content: eng.homeScreen, fontSize: engFontSizes.eng_M});
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
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {
                    fontSize: this.state.fontSize.heading,
                    fontFamily: this.calculateFontFamily('black'),
                  },
                ]}>
                {this.state.content.sections[0]}
              </Text>
            </View>
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {
                    fontSize: this.state.fontSize.heading,
                    fontFamily: this.calculateFontFamily('black'),
                  },
                ]}>
                {this.state.content.sections[1]}
              </Text>
            </View>
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {
                    fontSize: this.state.fontSize.heading,
                    fontFamily: this.calculateFontFamily('black'),
                  },
                ]}>
                {this.state.content.sections[2]}
              </Text>
            </View>
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {
                    fontSize: this.state.fontSize.heading,
                    fontFamily: this.calculateFontFamily('black'),
                  },
                ]}>
                {this.state.content.sections[3]}
              </Text>
            </View>
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {
                    fontSize: this.state.fontSize.heading,
                    fontFamily: this.calculateFontFamily('black'),
                  },
                ]}>
                {this.state.content.sections[4]}
              </Text>
            </View>
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
            <CategoryBox
              fontSize={this.state.fontSize}
              innerSection={this.state.content.innerSection}
              fontFamilyHeading={this.calculateFontFamily('heavy')}
              fontFamilyDescription={this.calculateFontFamily('light')}
              reverseFlag={Settings.currentLanguage}
            />
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
  },
  descriptionContainer: {
    width: '100%',
    marginTop: 20,
  },
  descriptionStyle: {
    lineHeight: 20,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionStyling: {
    color: '#04B874',
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
