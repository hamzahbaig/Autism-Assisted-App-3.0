import React from 'react';
import {View, Text, FlatList, StatusBar, ScrollView} from 'react-native';
import {englishFonts, urduFonts} from '../../assets/fonts/Fonts';
import autismBasicsEng from './autismBasicsEng.json';
import autismBasicsUrdu from './autismBasicsUrdu.json';
import eng from '../../content/eng.json';
import Settings from '../../settings/Settings.json';
import {engFontSizes, urduFontSizes} from '../../settings/FontSizes';
import Header from '../../components/Header';
import {styles} from '../../constants/Styles';
import CategoryBox from "../../components/CategoryBox"
export default class AutismBasicsCategories extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
    content:
      Settings.currentLanguage == 'english'
        ? autismBasicsEng.autismBasicsEng[
            this.props.navigation.getParam('index')
          ]
        : autismBasicsUrdu.autismBasicsUrdu[
            [this.props.navigation.getParam('index')]
          ],
    fontSize:
      Settings.currentLanguage == 'english'
        ? engFontSizes.eng_M
        : urduFontSizes.urdu_M,
    fontFamily: Settings.currentLanguage == 'english' ? null : urduFonts,
    contrast: Settings.currentContrast,
    searchedValue: null,
    pages: eng.pages,
    filtering: [],
  };
  onValueChnage = value => {
    this.setState({searchedValue: value});

    let filtering = [];
    filtering = this.state.pages.filter(item =>
      item[0].toLowerCase().includes(value.toLowerCase()),
    );
    this.setState({filtering: filtering});
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
        content:
          autismBasicsUrdu.autismBasicsUrdu[
            [this.props.navigation.getParam('index')]
          ],
        fontSize: urduFontSizes.urdu_M,
      });
    } else if (Settings.currentLanguage == 'urdu') {
      Settings.currentLanguage = 'english';
      Settings.currentFontSettings = 'm';
      this.setState({
        content:
          autismBasicsEng.autismBasicsEng[
            this.props.navigation.getParam('index')
          ],
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
            // onValueChnage={this.onValueChnage}
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
          {!this.state.searchedValue ? (
            <React.Fragment>
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
              <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.innerScrollViewContainer}>
                  {this.state.content.description ? (
                    <View style={styles.contentDescriptionContainer}>
                      <Text
                        style={{
                          fontSize: this.state.fontSize.content,
                          fontFamily: this.calculateFontFamily('light'),
                          lineHeight:
                            Settings.currentLanguage == 'english' ? 20 : 25,
                          textAlign:
                            Settings.currentLanguage == 'urdu' ? 'right' : null,
                        }}>
                        {this.state.content.description}
                      </Text>
                    </View>
                  ) : null}
                  {this.state.content.sections &&
                    this.state.content.sections.map((section, index) => (
                      <View>
                        {section.title ? (
                          <View style={styles.sectionContainer}>
                            <Text
                              style={[
                                styles.sectionStyling,
                                {
                                  fontSize: this.state.fontSize.heading,
                                  fontFamily: this.calculateFontFamily('black'),
                                  textAlign:
                                    Settings.currentLanguage == 'urdu'
                                      ? 'right'
                                      : null,
                                },
                              ]}>
                              {section.title}
                            </Text>
                          </View>
                        ) : null}
                        {section.description ? (
                          <View style={styles.contentDescriptionContainer}>
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
                              {section.description}
                            </Text>
                          </View>
                        ) : null}
                        {section.innerSection &&
                          section.innerSection.map(innerData => (
                            <View>
                              {innerData.title ? (
                                <View style={styles.innerSectionContainerTitle}>
                                  <Text
                                    style={{
                                      fontSize: this.state.fontSize
                                        .innerHeading,
                                      fontFamily: this.calculateFontFamily(
                                        'heavy',
                                      ),
                                      lineHeight: 20,
                                      textAlign:
                                        Settings.currentLanguage == 'urdu'
                                          ? 'right'
                                          : null,
                                    }}>
                                    {innerData.title}
                                  </Text>
                                </View>
                              ) : null}
                              <View
                                style={styles.innerSectionContainerDescription}>
                                {innerData.description.map((data, i) => (
                                  <Text
                                    style={{
                                      fontSize: this.state.fontSize.content,
                                      fontFamily: this.calculateFontFamily(
                                        'light',
                                      ),
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
                        <View style={styles.footerSectionContainer}>
                          <Text
                            style={{
                              fontSize: this.state.fontSize.content,
                              fontFamily: this.calculateFontFamily('light'),
                              lineHeight:
                                Settings.currentLanguage == 'english' ? 20 : 25,
                              textAlign:
                                Settings.currentLanguage == 'urdu'
                                  ? 'right'
                                  : null,
                            }}>
                            {section.footer}
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
              </ScrollView>
            </React.Fragment>
          ) : (
            <FlatList
              data={this.state.filtering}
              renderItem={({item}) => (
                <CategoryBox
                  screenChangeHandler={() =>
                    this.props.navigation.navigate(item[1], {
                      index: item[2],
                      index1: item[3],
                    })
                  }
                  image={null}
                  screenName={item[1]}
                  fontSize={this.state.fontSize}
                  innerSection={item[0]}
                  fontFamilyHeading={this.calculateFontFamily('medium')}
                  fontFamilyDescription={this.calculateFontFamily('light')}
                  reverseFlag={Settings.currentLanguage}
                />
              )}
            />
          )}
        </View>
      </View>
    );
  }
}
