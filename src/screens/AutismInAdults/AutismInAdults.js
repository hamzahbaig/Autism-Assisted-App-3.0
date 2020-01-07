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
            style={{
              fontSize: this.state.fontSize.content,
              fontFamily: this.calculateFontFamily('light'),
              lineHeight: Settings.currentLanguage == 'english' ? 20 : 25,
            }}>
            {this.state.content.description}
          </Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.innerScrollViewContainer}>
            {this.state.content.innerSection.map(x => (
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
