import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  BackHandler,
  StyleSheet,
  TouchableHighlightBase,
} from 'react-native';
import {englishFonts, urduFonts} from '../../assets/fonts/Fonts';
import autismInAdultsEng from './autismInAdultsEng.json';
import urdu from '../../content/urdu.json';
import Settings from '../../settings/Settings.json';
import {engFontSizes, urduFontSizes} from '../../settings/FontSizes';
import Header from '../../components/Header';
import {styles} from '../../constants/Styles';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class AutismInAdultsCategroies extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
    content:
      Settings.currentLanguage == 'english'
        ? autismInAdultsEng['1']
        : urdu.autismInAdults,
    fontSize:
      Settings.currentLanguage == 'english'
        ? engFontSizes.eng_M
        : urduFontSizes.urdu_M,
    fontFamily: Settings.currentLanguage == 'english' ? null : urduFonts,
    contrast: Settings.currentContrast,
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
  contrastChanger = key => {
    if (key == '#FACC56') {
      Settings.currentContrast = '#FACC56';
      this.setState({contrast: '#FACC56'});
    } else if (key == '#ACD7E5') {
      Settings.currentContrast = '#ACD7E5';
      this.setState({contrast: '#ACD7E5'});
    } else {
      Settings.currentContrast = null;
      this.setState({contrast: null});
    }
  };
  changeLanguage = () => {
    if (Settings.currentLanguage == 'english') {
      Settings.currentLanguage = 'urdu';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: urdu.autismInChildren,
        fontSize: urduFontSizes.urdu_M,
      });
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: eng.autismInChildren,
        fontSize: engFontSizes.eng_M,
      });
    }
  };
  componentDidMount() {
    this.fontSizeHandler(Settings.currentFontSettings);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.contrast,
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.container}>
          <Header
            backHandler={() => this.props.navigation.goBack()}
            languageSettings={Settings.currentLanguage}
            fontSettings={Settings.currentFontSettings}
            contrast={Settings.currentContrast}
            fontSizeHandler={this.fontSizeHandler}
            changeLanguage={this.changeLanguage}
            fontFamilyHeading={englishFonts.avenirMedium}
            fontFamilyOption={englishFonts.avenirMedium}
            fontFamilyUrdu={urduFonts.nafees}
            reverseFlag={Settings.currentLanguage}
            fontSize={this.state.fontSize}
            contrastChanger={this.contrastChanger}
          />
          <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
          <View style={styles1.bannerContainer}>
            <Text
              style={{
                fontSize: this.state.fontSize.superHeading,
                fontFamily: this.calculateFontFamily('black'),
                color: 'white',
                textAlign: 'center',
                //align because of language
              }}>
              {this.state.content.title}
            </Text>
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.innerScrollViewContainer}>
              <View style={styles1.contentDescriptionContainer}>
                <Text
                  style={{
                    fontSize: this.state.fontSize.content,
                    fontFamily: this.calculateFontFamily('light'),
                    lineHeight: Settings.currentLanguage == 'english' ? 20 : 25,
                    textAlign:
                      Settings.currentLanguage == 'urdu' ? 'right' : null,
                  }}>
                  {this.state.content.description}
                </Text>
              </View>
              {this.state.content.sections.map((section, index) => (
                <View>
                  <View style={styles.sectionContainer}>
                    <Text
                      style={[
                        styles.sectionStyling,
                        {
                          fontSize: this.state.fontSize.heading,
                          fontFamily: this.calculateFontFamily('black'),
                          textAlign:
                            Settings.currentLanguage == 'urdu' ? 'right' : null,
                        },
                      ]}>
                      {section.title}
                    </Text>
                  </View>
                  <View style={styles1.contentDescriptionContainer}>
                    <Text
                      style={{
                        fontSize: this.state.fontSize.content,
                        fontFamily: this.calculateFontFamily('light'),
                        lineHeight:
                          Settings.currentLanguage == 'english' ? 20 : 25,
                        textAlign:
                          Settings.currentLanguage == 'urdu' ? 'right' : null,
                      }}>
                      {section.description}
                    </Text>
                  </View>
                  {section.innerSection &&
                    section.innerSection.map(innerData => (
                      <View>
                        <View style={styles1.innerSectionContainerTitle}>
                          <Text
                            style={{
                              fontSize: this.state.fontSize.innerHeading,
                              fontFamily: this.calculateFontFamily('black'),
                              textAlign:
                                Settings.currentLanguage == 'urdu'
                                  ? 'right'
                                  : null,
                            }}>
                            {innerData.title}
                          </Text>
                        </View>
                        <View style={styles1.innerSectionContainerDescription}>
                          {innerData.description.map((data, i) => (
                            <Text
                              style={{
                                fontSize: this.state.fontSize.content,
                                fontFamily: this.calculateFontFamily('light'),
                                lineHeight:
                                  Settings.currentLanguage == 'english'
                                    ? 20
                                    : 25,
                                textAlign:
                                  Settings.currentLanguage == 'urdu'
                                    ? 'right'
                                    : null,
                              }}>
                              {`- ${data}`}
                            </Text>
                          ))}
                        </View>
                      </View>
                    ))}
                  <View style={styles1.footerSectionContainer}>
                    <Text
                      style={{
                        fontSize: this.state.fontSize.content,
                        fontFamily: this.calculateFontFamily('light'),
                        lineHeight:
                          Settings.currentLanguage == 'english' ? 20 : 25,
                        textAlign:
                          Settings.currentLanguage == 'urdu' ? 'right' : null,
                      }}>
                      {section.footer}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  bannerContainer: {
    width: phoneWidth,
    height: '10%',
    backgroundColor: '#04B874',
    justifyContent: 'center',
  },
  contentDescriptionContainer: {
    width: '100%',
    marginTop: 10,
  },
  innerSectionContainerTitle: {
    width: '100%',
    marginTop: 10,
  },
  innerSectionContainerDescription: {
    width: '100%',
    marginTop: 10,
  },
  footerSectionContainer: {
    width: '100%',
    marginTop: 10,
  },
});