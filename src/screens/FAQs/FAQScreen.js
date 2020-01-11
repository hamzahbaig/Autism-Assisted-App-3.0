import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {englishFonts, urduFonts} from '../../assets/fonts/Fonts';
import Settings from '../../settings/Settings.json';
import {engFontSizes, urduFontSizes} from '../../settings/FontSizes';
import Header from '../../components/Header';
import {styles} from '../../constants/Styles';
import englishFAQs from '../../content/englishFAQs';
import urduFAQs from '../../content/urduFAQs';

export default class FAQScreen extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
    content: Settings.currentLanguage == 'english' ? englishFAQs : urduFAQs,
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

  changeLanguage = () => {
    if (Settings.currentLanguage == 'english') {
      Settings.currentLanguage = 'urdu';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: urduFAQs,
        fontSize: urduFontSizes.urdu_M,
      });
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({
        content: englishFAQs,
        fontSize: engFontSizes.eng_M,
      });
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
          <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
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
          <View style={styles.bannerContainer}>
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
                  color: '#04B874',
                  lineHeight: 20,
                },
              ]}>
              {
                this.state.content.faqs[this.props.navigation.getParam('index')]
                  .question
              }
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text
              style={{
                fontSize: this.state.fontSize.content,
                fontFamily: this.calculateFontFamily('light'),
                lineHeight: Settings.currentLanguage == 'english' ? 20 : 25,
                textAlign: Settings.currentLanguage == 'urdu' ? 'right' : null,
                marginTop: 10,
              }}>
              {
                this.state.content.faqs[this.props.navigation.getParam('index')]
                  .excerpt
              }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
