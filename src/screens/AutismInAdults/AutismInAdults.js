import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import {englishFonts, urduFonts} from '../../assets/fonts/Fonts';
import eng from '../../content/eng.json';
import urdu from '../../content/urdu.json';
import Settings from '../../settings/Settings.json';
import {engFontSizes, urduFontSizes} from '../../settings/FontSizes';
import Header from '../../components/Header';
import CategoryBox from '../../components/CategoryBox';
import {styles} from '../../constants/Styles';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class AutismInAdults extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
    content:
      Settings.currentLanguage == 'english'
        ? eng.autismInAdults
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
  changeLanguage = () => {
    if (Settings.currentLanguage == 'english') {
      Settings.currentLanguage = 'urdu';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: urdu.autismInAdults,
        fontSize: urduFontSizes.urdu_M,
      });
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: eng.autismInAdults,
        fontSize: engFontSizes.eng_M,
      });
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
          <View
            style={[
              styles.mainHeadingContainer,
              Settings.currentLanguage == 'urdu'
                ? Platform.OS == 'ios'
                  ? {alignItems: 'flex-end'}
                  : null
                : null,
            ]}>
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
              style={{
                fontSize: this.state.fontSize.content,
                fontFamily: this.calculateFontFamily('light'),
                lineHeight: Settings.currentLanguage == 'english' ? 20 : 25,
                textAlign: Settings.currentLanguage == 'urdu' ? 'right' : null,
              }}>
              {this.state.content.description}
            </Text>
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.innerScrollViewContainer}>
              {this.state.content.innerSection.map((section, i) => (
                <CategoryBox
                  screenChangeHandler={() =>
                    this.props.navigation.navigate('AutismInAdultsCategroies', {
                      index: i,
                    })
                  }
                  screenName={"AutismInAdultsCategroies"}
                  fontSize={this.state.fontSize}
                  innerSection={section}
                  fontFamilyHeading={this.calculateFontFamily('heavy')}
                  fontFamilyDescription={this.calculateFontFamily('light')}
                  reverseFlag={Settings.currentLanguage}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
